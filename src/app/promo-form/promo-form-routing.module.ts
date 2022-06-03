import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StepDefinitionComponent} from "./step-definition/step-definition.component";
import {PromoFormComponent} from "./promo-form/promo-form.component";

const routes: Routes = [
  {
    path: '',
    component: PromoFormComponent,
    children: [
      {
        path: 'step-definition',
        component: StepDefinitionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoFormRoutingModule { }
