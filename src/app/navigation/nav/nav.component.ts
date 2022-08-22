import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  productsString: string = "Product Catalog";
  cartString: string = "Shopping Cart";

  public searchTerm !: string;
  searchKey: string = "";

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

}
