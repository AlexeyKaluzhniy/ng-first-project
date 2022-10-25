import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './page-two.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    PageTwoComponent
  ],
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ]
})
export class PageTwoModule { }
