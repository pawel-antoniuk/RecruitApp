import { Injectable } from '@angular/core';
import {Step} from "../viewmodels/Step";
import {ActivationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private _steps: Step[] = [
    new Step('step-definition', 'definition'),
    new Step('step-placeholder1', 'choose products'),
    new Step('step-placeholder2', 'exclude products'),
    new Step('step-placeholder3', 'bonus products', 'Lorem ipsum', false),
    new Step('step-placeholder4', 'products limits', 'Lorem ipsum', false),
    new Step('step-placeholder5', 'choose clients'),
    new Step('step-placeholder6', 'exclude clients'),
    new Step('step-placeholder7', 'client limits'),
    new Step('step-summary', 'summary'),
  ];

  constructor(private router: Router) {
    router.events.subscribe((val:any) => {
      if(val instanceof ActivationEnd) {
        this.refresh();
      }
    })
  }

  public refresh() {
    const currentDocumentName = this.router.url.split('/').pop();

    for(let step of this._steps) {
      step.active = step.url === currentDocumentName
    }
  }

  public get steps(): Step[] {
    this.refresh();
    return this._steps;
  }
}
