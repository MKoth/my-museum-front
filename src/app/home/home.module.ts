import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerModule } from '../common/banner/banner.module';
import { UserInfoModule } from '../common/user-info/user-info.module';
import { MansoryBlocksModule } from '../common/mansory-blocks/mansory-blocks.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerModule,
    UserInfoModule,
    MansoryBlocksModule
  ]
})
export class HomeModule { }
