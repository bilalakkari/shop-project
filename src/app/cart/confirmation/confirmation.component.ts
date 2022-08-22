import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  name: string = '';
  address: string = '';
  total: number = 0;

  imgUrl: string = "https://cdn.pixabay.com/photo/2020/04/10/13/28/success-5025797_1280.png";
  success: string = "Order received!"
  thankYouLine: string = "Thank you for your order,";
  orderLine: string = "This order will be billed for:";
  addressLine: string = "Shipping to:";
  finalLine: string = "Shipping approximation:";
  buttonText: string = "Return to catalog";

  shippingTimeline: string = "";

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.name = this.orderService.getName();
    this.address = this.orderService.getAddress();
    this.total = this.orderService.getTotal();
    this.shippingTimeline = this.orderService.getTimeline();
  }

}
