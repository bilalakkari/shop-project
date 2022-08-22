import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { CartFormComponent } from './cart-form/cart-form.component';

@NgModule({
  declarations: [
    FormComponent,
    CartFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    CartFormComponent
  ]
})

export class FormModule { }
