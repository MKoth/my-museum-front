import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HeaderOnlyLayoutComponent } from './header-only-layout/header-only-layout.component';
import { RegistrationLayoutComponent } from './registration-layout/registration-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: RegistrationLayoutComponent,
    children: [
      { path: 'login', loadChildren: '../login/login.module#LoginModule' },
      { path: 'registration', loadChildren: '../registration/registration.module#RegistrationModule' },
    ]
  },
  {
    path: '',
    component: HeaderOnlyLayoutComponent,
    children: [
      { path: 'wallet', loadChildren: '../wallet/wallet.module#WalletModule' },
      { path: 'notifications', loadChildren: '../notifications/notifications.module#NotificationsModule' },
      { path: 'contact-form', loadChildren: '../contact-form/contact-form.module#ContactFormModule' }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomeModule' },
      { path: 'opportunities', loadChildren: '../opportunities/opportunities.module#OpportunitiesModule' },
      { path: 'product/:id', loadChildren: '../product/product.module#ProductModule' }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
