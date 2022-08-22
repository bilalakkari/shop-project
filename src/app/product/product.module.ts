import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormModule } from '../form/form.module';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent
  ]
})
export class ProductModule { }
