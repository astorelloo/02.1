import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
  { path: '/food/:name', component: ProdottoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
