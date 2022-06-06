import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StepDefinitionComponent} from "./components/step-definition/step-definition.component";
import {PromoFormComponent} from "./promo-form.component";
import {StepPlaceholderComponent} from "./components/step-placeholder/step-placeholder.component";
import {StepSummaryComponent} from "./components/step-summary/step-summary.component";

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
        path: 'step-placeholder1',
        component: StepPlaceholderComponent
      },
      {
        path: 'step-placeholder2',
        component: StepPlaceholderComponent
      },
      {
        path: 'step-placeholder3',
        component: StepPlaceholderComponent
      },
      {
        path: 'step-placeholder4',
        component: StepPlaceholderComponent
      },
      {
        path: 'step-placeholder5',
        component: StepPlaceholderComponent
      },
      {
        path: 'step-placeholder6',
        component: StepPlaceholderComponent
      },
      {
        path: 'step-placeholder7',
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
