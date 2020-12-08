import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/product', 
    pathMatch: 'full'
  },
  {
    path: 'product',
    component: HomeComponent
  },
  {
    path: 'category/:id',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: DetailComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
