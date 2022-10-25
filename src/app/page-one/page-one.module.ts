import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageOneComponent
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PageOneModule { }
