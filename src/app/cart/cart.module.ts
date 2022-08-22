import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FormModule
  ],
  exports: [
    CartComponent,
    CartItemsComponent,
    ConfirmationComponent
  ]
})
export class CartModule { }
