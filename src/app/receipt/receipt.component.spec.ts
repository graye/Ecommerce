/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReceiptComponent } from './receipt.component';

import { OrderService } from '../order.service';

describe('Component: Receipt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService]
    });
  });

  it('should create an instance', inject([OrderService], (service: OrderService) => {
    let component = new ReceiptComponent(service, null);
    expect(component).toBeTruthy();
  }));
});
