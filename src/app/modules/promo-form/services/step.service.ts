import {Injectable, OnInit} from '@angular/core';
import {Step} from "../models/Step";
import {ActivationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class StepService implements OnInit {
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

  private routerEventSubscription?: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.routerEventSubscription = this.router.events.subscribe((val: any) => {
      if (val instanceof ActivationEnd) {
        this.refresh();
      }
    })
  }

  ngOnDestroy(): void {
    this.routerEventSubscription?.unsubscribe();
  }

  public get currentStepId(): string {
    return this.router.url.split('/').pop() ?? '';
  }

  public get currentSteLabel(): string {
    const stepId = this.currentStepId;
    return this._steps.find(s => s.id === stepId)?.label ?? '';
  }

  public refresh() {
    const currentDocumentName = this.currentStepId;

    for (let step of this._steps) {
      step.active = step.id === currentDocumentName
    }
  }

  public get steps(): Step[] {
    this.refresh();
    return this._steps;
  }
}
