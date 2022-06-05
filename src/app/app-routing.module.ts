import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page404Component} from "./modules/error-page/page404/page404.component";

const routes: Routes = [
  {
    path: 'promo-form',
    loadChildren: () => import('./modules/promo-form/promo-form.module').then(m => m.PromoFormModule)
  },
  {
    path: 'promo-list',
    loadChildren: () => import('./modules/promo-list/promo-list.module').then(m => m.PromoListModule)
  },
  {
    path: '',
    redirectTo: 'promo-form',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
