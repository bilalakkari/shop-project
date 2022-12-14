import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  // stream products within data.json
  getProductsStream(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("https://ma20222208.herokuapp.com/api/home/data/");
  }

}
