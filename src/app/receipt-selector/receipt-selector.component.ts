import {
  Component, OnInit,
  trigger,
  state,
  style,
  transition,
  animate, keyframes
} from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-receipt-selector',
  templateUrl: './receipt-selector.component.html',
  styleUrls: ['./receipt-selector.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateY(+100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(+90%)', offset: 0.3}),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateY(0)' }),
          style({ opacity: 0, transform: 'translateY(-100%)' })
        ]))
      ]),
    ]),
    trigger('fadeIn', [
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 }),
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0 }),
        ]))
      ]),
    ])
  ]
})
export class ReceiptSelectorComponent implements OnInit {

  orders: Array<Order>;

  observable: Observable<Array<Order>>;

  constructor(private orderService: OrderService) {
    //this.orders = orderService.getAllOrder();
    this.orders = [];
    //orderService.getOrderFromUrl().then(res => this.orders = res);

    this.observable = orderService.getOrderFromUrlWithObservable();
  }

  ngOnInit() {
    this.observable.subscribe(data => {
      this.orders = data;
    });
  }

  deleteOrder(id: string): void {
    this.orderService.deleteOrder(id);
  }

  loadFromUrl() {
    this.orderService.getOrderFromUrl().then(orders => {
      this.orders = orders;
    });
  }
}
