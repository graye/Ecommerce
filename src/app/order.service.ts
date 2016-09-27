import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderItem } from './order-item';

const ORDERS: Array<Order> = [
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


const LOCAL_KEY: string = "order_key";

@Injectable()
export class OrderService {

  private _orders: Array<Order>;

  constructor() {
    this.load();
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
    return this._orders;
  }

  load(): Array<Order> {
    let datastring = localStorage[LOCAL_KEY];
    let result;
    if(!datastring) {
      this._orders = ORDERS;
      this.save();
    } else {
      result = JSON.parse(datastring);
      this._orders = this.loadData(result);
    }

    return this._orders;
  }

  save(): void {
    var jsonString = JSON.stringify(this._orders);
    localStorage[LOCAL_KEY] = jsonString;
  }

  loadData(orders_json: Array<any>) {
    let orders: Array<Order> = [];
    orders_json.forEach((orderItem: any, index: number, arr: any[]) => {
      let items: Array<OrderItem> = [];
      orderItem.items.forEach((item: OrderItem, itemIndex: number, itemArray: Array<OrderItem>) => {
        items.push(new OrderItem(item.item, item.quantity, item.unit_price));
      });

      let order = new Order(items, new Date(orderItem.create_time));
      order.id = orderItem.id;
      orders.push(order);
    });

    return orders;
  }
}
