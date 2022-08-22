import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartPayload } from '../../models/CartPayload';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  submitAlertText: string = "Added to cart!";

  // pertains to the product this form is attached to
  @Input() id: number = 0;
  @Input() price: number = 0;
  quantity: number = 1; // to be reset to 1 after sending data to cart service

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    const miniCart: CartPayload = { 'price': this.price, 'quantity': Number(this.quantity) };
    this.cartService.addToCart(this.id, miniCart);
    alert(this.submitAlertText);
  }

}
