import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  userName: string = '';
  userAddress: string = '';
  orderTotal: number = 0;
  shippingTimeline: string = '';

  constructor() { }

  setOrderInfo(name: string, address: string, total: number, timeline: string): void {
    this.userName = name;
    this.userAddress = address;
    this.orderTotal = total;
    this.shippingTimeline = timeline;
  }

  getName(): string {
    return this.userName;
  }

  getAddress(): string {
    return this.userAddress;
  }

  getTotal(): number {
    return this.orderTotal;
  }

  getTimeline(): string {
    return this.shippingTimeline;
  }

}
