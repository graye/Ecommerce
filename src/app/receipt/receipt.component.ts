import { Component, OnInit, Input } from '@angular/core';

import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  order: Order;

  constructor(orderService: OrderService) {
    this.order = orderService.getAllOrder()[0];
   }

  ngOnInit() {
  }

}
