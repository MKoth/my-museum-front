import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductInfoModule } from '../common/product-info-component/product-info.module';
import { MansoryBlocksModule } from '../common/mansory-blocks/mansory-blocks.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductInfoModule,
    MansoryBlocksModule
  ]
})
export class ProductModule { }
