import {Injectable, OnInit} from '@angular/core';
import {Step} from "../models/Step";
import {ActivationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

export interface FormStepUpdateDescriptor {
  id: string,
  available: boolean,
  tooltip: string
}

@Injectable({
  providedIn: 'any'
})
export class FormStepService {
  private readonly initialNavigationSteps: Step[] = [
    new Step('step-definition', 'definition'),
    new Step('step-placeholder1', 'choose products'),
    new Step('step-placeholder2', 'exclude products'),
    new Step('step-placeholder3', 'bonus products'),
    new Step('step-placeholder4', 'products limits'),
    new Step('step-placeholder5', 'choose clients'),
    new Step('step-placeholder6', 'exclude clients'),
    new Step('step-placeholder7', 'client limits'),
    new Step('step-summary', 'summary'),
  ];
  private currentNavigationSteps: Step[];
  private routerEventSubscription?: Subscription;

  constructor(private router: Router) {
    this.currentNavigationSteps = this.initialNavigationSteps.map(s => Object.assign({}, s));
    this.routerEventSubscription = this.router.events.subscribe((val: any) => {
      if (val instanceof ActivationEnd) {
        this.reload();
      }
    })
  }

  ngOnDestroy(): void {
    this.routerEventSubscription?.unsubscribe();
  }

  public getCurrentStepId(url?: string): string {
    return url ?? this.router.url.split('/').pop() ?? '';
  }

  public getCurrentStep(url: string | undefined): Step | undefined {
    const stepId = this.getCurrentStepId(url);
    return this.currentNavigationSteps.find(s => s.id === stepId);
  }

  public getCurrentStepLabel(url?: string ): string | undefined {
    return this.getCurrentStep(url)?.label ?? '';
  }

  public isCurrentStepAvailable(url?: string): boolean {
    return this.getCurrentStep(url)?.available ?? false;
  }

  public reload(): void {
    const currentDocumentName = this.getCurrentStepId();

    for (let step of this.currentNavigationSteps) {
      step.active = step.id === currentDocumentName
    }
  }

  public get steps(): Step[] {
    this.reload();
    return this.currentNavigationSteps;
  }

  public updateSteps(updateDescriptors: FormStepUpdateDescriptor[],
                     defaultAvailability: boolean = true, defaultTooltip: string = '') {
    for(let step of this.currentNavigationSteps) {
      const descriptor = updateDescriptors.find(d => d.id == step.id);
      if(descriptor) {
        step.available = descriptor.available;
        step.tooltip = descriptor.tooltip;
      } else {
        step.available = defaultAvailability;
        step.tooltip = defaultTooltip;
      }
    }
  }
}
