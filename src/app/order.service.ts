import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderItem } from './order-item';

const orders: Array<Order> = [
  new Order([
        new OrderItem('Samsung Note7', 1, 100),
        new OrderItem('MacBook', 1, 200),
        new OrderItem('Ipad Mini', 2, 250)
      ]),
        new Order([
        new OrderItem('A', 2, 100),
        new OrderItem('B', 3, 200),
        new OrderItem('C', 2, 250)
      ]),
        new Order([
        new OrderItem('D', 1, 100),
        new OrderItem('E', 5, 260),
        new OrderItem('F', 1, 350)
      ])];

@Injectable()
export class OrderService {

  orders: Array<Order>;

  constructor() {
    this.orders = [
  new Order([
        new OrderItem('Samsung Note7', 1, 100),
        new OrderItem('MacBook', 1, 200),
        new OrderItem('Ipad Mini', 2, 250)
      ]),
        new Order([
        new OrderItem('A', 2, 100),
        new OrderItem('B', 3, 200),
        new OrderItem('C', 2, 250)
      ]),
        new Order([
        new OrderItem('D', 1, 100),
        new OrderItem('E', 5, 260),
        new OrderItem('F', 1, 350)
      ])];
   }

  getOrder(id: string) {
    let all = this.getAllOrder();
    for (let i = 0; i < all.length; i++) {
      if (all[i].id === id) {
        return all[i];
      }
    }

    return null;
  }

  getAllOrder(): Array<Order> {
    return this.orders;
  }
}
