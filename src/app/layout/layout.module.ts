import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HeaderOnlyLayoutComponent } from './header-only-layout/header-only-layout.component';
import { RegistrationLayoutComponent } from './registration-layout/registration-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [],
  declarations: [
    FullLayoutComponent,
    FooterComponent,
    HeaderComponent,
    RegistrationLayoutComponent,
    HeaderOnlyLayoutComponent
  ]
})
export class LayoutModule { }
