import { Component, OnInit, Input } from '@angular/core';

import { Order } from '../order';
import { OrderService } from '../order.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  order: Order;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((value: Params) =>{
      let id = value['id'];
      this.order = this.orderService.getOrder(id);
    })
  }

}
