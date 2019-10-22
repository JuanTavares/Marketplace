import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule
  ]
})
export class ProductPageModule { }
