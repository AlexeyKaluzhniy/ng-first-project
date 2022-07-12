import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'FirstPage',
    pathMatch: 'full'
  },
  {
    path: 'FirstPage',
    component: FirstPageComponent
  },
  {
    path: 'SecondPage',
    component: SecondPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
