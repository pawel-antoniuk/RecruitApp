import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromoListRoutingModule} from "./promo-list-routing.module";
import {PromoListComponent} from './promo-list.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {DialogModule} from "../dialog/dialog.module";


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
    MatIconModule,
  ]
})
export class PromoListModule {
}
