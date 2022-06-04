import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromoListRoutingModule} from "./promo-list-routing.module";
import {PromoListComponent} from './promo-list/promo-list.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    PromoListComponent
  ],
  imports: [
    CommonModule,
    PromoListRoutingModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class PromoListModule {
}
