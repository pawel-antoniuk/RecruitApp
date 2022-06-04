import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromoListRoutingModule} from "./promo-list-routing.module";
import {PromoListComponent} from './promo-list/promo-list.component';


@NgModule({
  declarations: [
    PromoListComponent
  ],
  imports: [
    CommonModule,
    PromoListRoutingModule
  ]
})
export class PromoListModule {
}
