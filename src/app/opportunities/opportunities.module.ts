import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesComponent } from './opportunities.component';
import { BannerModule } from '../common/banner/banner.module';
import { MansoryBlocksModule } from '../common/mansory-blocks/mansory-blocks.module';


@NgModule({
  declarations: [OpportunitiesComponent],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    BannerModule,
    MansoryBlocksModule
  ]
})
export class OpportunitiesModule { }
