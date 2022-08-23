import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemDetailComponent } from './product/product-item-detail/product-item-detail.component';
import { CartComponent } from './cart/cart/cart.component';
import { ConfirmationComponent } from './cart/confirmation/confirmation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductItemDetailComponent },
  { path: 'cart/products/:id', component: ProductItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
