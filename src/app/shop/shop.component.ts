import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { GetProductsService } from '../services/get-products.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productList: any;
  public searchTerm !: string;

  searchKey: string = "";
  public filterCategory: any

  constructor(private productsService: ProductsService, private productService: GetProductsService, private cartService: CartService, private api: ApiService) { }

  ngOnInit(): void {
    // populate products array with Observable stream service
    this.productService.getProductsList().subscribe(res => {
      this.productList = res;
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })

    this.productService.getProductsList().subscribe(
      (res: any) => {
        this.productService = res; this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, {
            quantity: 1, total: a.price
          });
        })

        this.cartService.search.subscribe((val: any) => {
          this.searchKey = val;
        })

      });

    this.api.getProduct()
      .subscribe((res: any) => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
      });
  }

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })

  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

}