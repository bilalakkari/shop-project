import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ApiService } from 'src/app/services/api.service';
import { GetProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements OnInit {

  backLinkText: string = "Full catalog";
  // the exact product this component will detail
  product: any;

  constructor(private productService: GetProductsService, private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log("params ", params);
      this.product = params.id
    })
    this.productService.getProduct(this.product).subscribe(
      (res: any) => { this.productService = res; this.product = res },
      (error) => { console.log(error) })
  }
}
