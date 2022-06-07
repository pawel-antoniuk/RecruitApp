import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepDefinitionComponent} from './components/step-definition/step-definition.component';
import {StepPlaceholderComponent} from './components/step-placeholder/step-placeholder.component';
import {StepSummaryComponent} from './components/step-summary/step-summary.component';
import {PromoFormComponent} from './promo-form.component';
import {PromoFormRoutingModule} from "./promo-form-routing.module";
import {NavigationComponent} from './components/navigation/navigation.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTooltipModule} from '@angular/material/tooltip';
import {ReactiveFormsModule} from "@angular/forms";
import {InfoButtonComponent} from './components/info-button/info-button.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {
  SummaryControlDescriptionComponent
} from './components/step-summary/summary-control-description/summary-control-description.component';


@NgModule({
  declarations: [
    StepDefinitionComponent,
    StepPlaceholderComponent,
    StepSummaryComponent,
    PromoFormComponent,
    NavigationComponent,
    InfoButtonComponent,
    SummaryControlDescriptionComponent
  ],
  imports: [
    CommonModule,
    PromoFormRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
  exports: [
    PromoFormComponent
  ]
})
export class PromoFormModule {
}
