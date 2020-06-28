import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { MansoryBlocksComponent } from './mansory-blocks.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MansoryBlocksComponent],
  imports: [
    CommonModule,
    NgMasonryGridModule,
    RouterModule
  ],
  exports: [
    NgMasonryGridModule,
    MansoryBlocksComponent
  ]
})
export class MansoryBlocksModule { }
