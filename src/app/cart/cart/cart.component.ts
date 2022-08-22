import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartPayload } from '../../models/CartPayload';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  emptyCartMessageTop: string = "Your cart is empty!";
  emptyCartMessageBottom: string = "Return to";
  linkText: string = "Home Page";

  cart: Map<string, CartPayload> = new Map();
  cartKeys: string[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartKeys = [...this.cart.keys()];
    this.total = this.cartService.getTotal();
  }

  updateCartInfo(): void {
    this.cart = this.cartService.getCart();
    this.cartKeys = [...this.cart.keys()];
    this.total = this.cartService.getTotal();
  }

  // updated from child component's form (cart-items)
  updateTotal(total: number): void {
    this.updateCartInfo();
  }

}
