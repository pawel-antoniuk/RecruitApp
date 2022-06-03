import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepDefinitionComponent} from './step-definition/step-definition.component';
import {StepPlaceholderComponent} from './step-placeholder/step-placeholder.component';
import {StepSummaryComponent} from './step-summary/step-summary.component';

@NgModule({
  declarations: [
    StepDefinitionComponent,
    StepPlaceholderComponent,
    StepSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PromoFormModule {
}
