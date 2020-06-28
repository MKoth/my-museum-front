import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent, ImageOverviewDialog, QuotasDialog } from './product-info.component';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [ProductInfoComponent, ImageOverviewDialog, QuotasDialog],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        ProductInfoComponent,
        MatDialogModule,
        ImageOverviewDialog,
        MatIconModule,
        MatButtonModule,
        QuotasDialog
    ],
    entryComponents: [ImageOverviewDialog, QuotasDialog]
  })
  export class ProductInfoModule { }
