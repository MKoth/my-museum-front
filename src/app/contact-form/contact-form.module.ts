import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormComponent } from './contact-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ContactFormRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ContactFormModule { }
