import { Component, OnInit } from '@angular/core';

import { Order } from '../order';
import { OrderService } from '../order.service';
import { OrderItem } from '../order-item'

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {

  private order: Order;

  private orderDateString: string;

  private isNew: boolean;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((value: Params) => {
      let id = value['id'];
      if (id) {
        this.order = this.orderService.getOrder(id);
      }
      else {
        this.order = new Order([new OrderItem('', 1, 0)], new Date());
        this.isNew = true;
      }

      this.orderDateString = this.order.create_time.toISOString().substring(0, 10);
    });
  }

  addItem(): void {
    this.order.items.push(new OrderItem('', 1, 0));
  }

  deleteItem(index: number): void {
    this.order.items.splice(index, 1);
  }

  validate(): boolean {
    let result = true;
    if (!this.orderDateString) {
      return false;
    }

    if (!this.order.items.length) {
      return false;
    }

    let errors = this.order.items.filter((item: OrderItem, i: number, arr: OrderItem[]) => {
      return !this.validateItem(item);
    });

    return errors.length == 0;
  }

  save(): boolean {
    if (!this.validate()) {
      return false;
    }

    this.order.create_time = new Date(this.orderDateString);

    if (this.isNew) {
      this.orderService.addNew(this.order);
    }
    else {
      this.orderService.updateOrder(this.order);
    }

    return true;
  }

  onsave(): void {
    if (!this.save()) {
      alert('Unable to save.');
    }
    else {
      alert('Saved');
      this.router.navigate(['']);
    }
  }

  private validateItem(item: OrderItem): boolean {
    if (!item.item || item.item === '') {
      return false;
    }

    if (item.quantity <= 0) {
      return false;
    }

    if (item.unit_price <= 0) {
      return false;
    }

    return true;
  }
}
