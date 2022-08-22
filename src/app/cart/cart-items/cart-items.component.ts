import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  @Output() totalEmitter: EventEmitter<number> = new EventEmitter;
  @Input() id: string = '';
  product: Product = { id: 0, title: '', price: 0, image: '', description: '' };
  quantity: number = 0;
  numberId: number = 0;
  quantityLabel: string = "Quantity:";

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    // find the product this component is about
    this.numberId = Number(this.id);

    this.productsService.getProductsStream().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id === this.numberId) {
          this.product = res[i];
        }
      }
    });
    // get the quantity
    this.quantity = this.cartService.getQuantity(this.numberId);
  }

  alterCartQuantity(): void {
    this.cartService.alterQuantity(this.numberId, this.quantity);

    this.totalEmitter.emit(this.cartService.getTotal());
  }

}
