import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartPayload } from '../models/CartPayload';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: Map<string, CartPayload> = new Map();
  shipping: number = 0;
  removedFromCartAlertMessage: string = "Removed from cart!";

  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  // local storage keys
  shippingKey: string = "shipping";
  cartKey: string = "cart";

  constructor(private productService: ProductsService) {

    // getting shipping choice previously set from local storage
    const shippingFromStorage = localStorage.getItem(this.shippingKey);

    if (shippingFromStorage) {
      // shipping choice previously made => set default shipping to that value
      this.shipping = +shippingFromStorage;
      this.localStoreShipping(this.shipping);
    }

    // retrieve cart data from local storage if it exists there
    this.loadCartFromLocalStorage();
  }

  // imports previous cart data
  loadCartFromLocalStorage(): void {

    const cartFromStorage = localStorage.getItem(this.cartKey);

    if (cartFromStorage) {
      const cartArray = JSON.parse(cartFromStorage);
      for (let i = 0; i < cartArray.length; i++) {
        const cartObject = cartArray[i];
        // update the actual cart (map)
        this.cart.set(cartObject.key, { quantity: cartObject.quantity, price: cartObject.price });
      }

    }
  }

  // store shipping choice in local storage
  localStoreShipping(price: number): void {
    localStorage.setItem(this.shippingKey, price.toString());
  }

  // store representation of cart in local storage
  localStoreCart(): void {
    // store cart in string form of:
    // [{key, quantity, price},...]
    let cartRepresentation = [];

    for (let key of this.cart.keys()) {
      let payload = this.cart.get(key)!;
      cartRepresentation.push({ key: key, quantity: payload.quantity, price: payload.price });
    }
    // now to store cartRepresentation into local storage
    localStorage.setItem(this.cartKey, JSON.stringify(cartRepresentation));
  }


  getCart(): Map<string, CartPayload> {
    return this.cart;
  }

  getQuantity(id: number): number {
    return this.cart.get(id.toString())!.quantity;
  }

  setShipping(shipping: number): void {
    this.shipping = shipping;
    // store shipping choice in local storage
    this.localStoreShipping(this.shipping);
  }

  getTotal(): number {
    let total: number = this.shipping;

    for (let key of this.cart.keys()) {
      let payload: CartPayload = this.cart.get(key)!;
      total += (payload.quantity * payload.price);
    }

    return total;
  }

  // allows the user to alter the quantity values in the cart page 
  alterQuantity(id: number, newQuantity: number): CartPayload {

    const stringId = id.toString();
    const updatedPayload = this.cart.get(stringId)!;

    // item has been deleted from the cart - delete its key
    if (newQuantity <= 0) {
      alert(this.removedFromCartAlertMessage);
      this.cart.delete(stringId);

      if ([...this.cart.keys()].length === 0) {
        this.shipping = 0;
        // store shipping choice in local storage
        this.localStoreShipping(this.shipping);
      }

      return updatedPayload;
    }

    updatedPayload.quantity = newQuantity;

    this.cart.set(stringId, updatedPayload);
    // store updated cart in local storage
    this.localStoreCart();

    return updatedPayload;
  }


  addToCart(id: number, payload: CartPayload): Map<string, CartPayload> {

    const stringId = id.toString();

    // if id already exists (item already in cart)
    if (this.cart.get(stringId)) {
      const currentProductQuantity = Number(this.cart.get(stringId)?.quantity);
      payload.quantity += currentProductQuantity!;
    }

    this.cart.set(stringId, payload);
    // store updated cart in local storage
    this.localStoreCart();

    return this.cart;
  }

  clearCart(): void {
    this.cart = new Map();
    this.shipping = 0;
    // store shipping choice in local storage
    this.localStoreShipping(this.shipping);
  }


  logCart(): void {
    for (let key of this.cart.keys()) {
      console.log(`Here is key:${key}`);
      const v = this.cart.get(key)!;
      console.log(`Here is price:${v.price}`);
      console.log(`Here is quantity:${v.quantity}`);
      console.log(``);
    }
    console.log(`End of cart.`)
  }

  getProducts() {
    return this.productList.asObservable();
  }

}