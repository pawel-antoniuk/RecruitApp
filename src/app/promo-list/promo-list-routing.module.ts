import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PromoListComponent} from "./promo-list/promo-list.component";

const routes: Routes = [
  {
    path: '',
    component: PromoListComponent,
    children: [
      {
        path: 'list',
        component: PromoListComponent
      },
      {
        path: '',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoListRoutingModule {
}
