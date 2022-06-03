import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepDefinitionComponent} from './step-definition/step-definition.component';
import {StepPlaceholderComponent} from './step-placeholder/step-placeholder.component';
import {StepSummaryComponent} from './step-summary/step-summary.component';
import {PromoFormComponent} from './promo-form/promo-form.component';
import {RouterModule, Routes} from "@angular/router";
import {PromoFormRoutingModule} from "./promo-form-routing.module";


@NgModule({
  declarations: [
    StepDefinitionComponent,
    StepPlaceholderComponent,
    StepSummaryComponent,
    PromoFormComponent
  ],
  imports: [
    CommonModule,
    PromoFormRoutingModule
  ],
  exports: [
    PromoFormComponent
  ]
})
export class PromoFormModule {
}
