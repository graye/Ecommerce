/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReceiptSelectorComponent } from './receipt-selector.component';

import { OrderService } from '../order.service';

describe('Component: ReceiptSelector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService]
    });
  });

  it('should create an instance', inject([OrderService], (service: OrderService) => {
    let component = new ReceiptSelectorComponent(service);
    expect(component).toBeTruthy();
  }));
});
