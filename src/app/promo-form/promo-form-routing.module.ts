import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StepDefinitionComponent} from "./step-definition/step-definition.component";
import {PromoFormComponent} from "./promo-form/promo-form.component";
import {StepPlaceholderComponent} from "./step-placeholder/step-placeholder.component";
import {StepSummaryComponent} from "./step-summary/step-summary.component";

const routes: Routes = [
  {
    path: '',
    component: PromoFormComponent,
    children: [
      {
        path: 'step-definition',
        component: StepDefinitionComponent
      },
      {
        path: 'step-summary',
        component: StepSummaryComponent
      },
      {
        path: 'step-placeholder',
        component: StepPlaceholderComponent
      },
      {
        path: '',
        redirectTo: 'step-definition'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoFormRoutingModule { }
