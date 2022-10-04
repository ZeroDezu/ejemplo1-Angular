import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path:'', component:ProductListComponent },
  { path:'suma', component:OperasBasComponent},
  { path:'cinepolis', component:CinepolisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
