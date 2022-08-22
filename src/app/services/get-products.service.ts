import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  private products = new BehaviorSubject(0);
  items = this.products.asObservable();

  constructor(private http: HttpClient) { }

  getProductsList() {
    return this.http.get('https://ma20222208.herokuapp.com/api/home/data')
  }
  getProduct(id: any) {
    return this.http.get(`https://product-api-nodejs.herokuapp.com/products/${id}`)
  }
}
