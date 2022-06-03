import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepDefinitionComponent} from './step-definition/step-definition.component';
import {StepPlaceholderComponent} from './step-placeholder/step-placeholder.component';
import {StepSummaryComponent} from './step-summary/step-summary.component';
import {PromoFormComponent} from './promo-form/promo-form.component';
import {RouterModule, Routes} from "@angular/router";
import {PromoFormRoutingModule} from "./promo-form-routing.module";
import { NavigationComponent } from './navigation/navigation.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    StepDefinitionComponent,
    StepPlaceholderComponent,
    StepSummaryComponent,
    PromoFormComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    PromoFormRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  exports: [
    PromoFormComponent
  ]
})
export class PromoFormModule {
}
