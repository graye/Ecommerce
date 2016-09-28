import { Component, OnInit } from '@angular/core';

import { Order } from '../order';
import { OrderService } from '../order.service';
import { OrderItem } from '../order-item'

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {

  private order: Order;

  private orderDateString: string;

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((value: Params) => {
      let id = value['id'];
      this.order = this.orderService.getOrder(id);
      this.orderDateString = this.order.create_time.toISOString().substring(0, 10);
    });
  }

  addItem(){
    this.order.items.push(new OrderItem('', 1, 0));
  }

  deleteItem(id: string){
    
  }

  validate(): boolean{
    return false;
  }

  save(): boolean{
    return false;
  }
}
