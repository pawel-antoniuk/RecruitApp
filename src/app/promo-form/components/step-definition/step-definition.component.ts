import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DraftService} from "../../../shared-services/draft.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-step-definition',
  templateUrl: './step-definition.component.html',
  styleUrls: ['./step-definition.component.scss']
})
export class StepDefinitionComponent implements OnInit {

  private formValueChangesSubscription?: Subscription;

  form = this.fb.group({
    id: [''],
    description: this.fb.group({
      marketingName: [''],
      technicalName: [''],
      description: [''],
    }),
    conditions: this.fb.group({
      portal: [''],
      type: [''],
      benefitAmount: [''],
      startDate: [''],
      endDate: [''],
      priceConditions: ['businessConditions'],
      connectWithOtherPromotions: [false],
      backPromotion: [false]
    })
  })

  constructor(private fb: FormBuilder,
              private draftService: DraftService) {  }

  ngOnInit(): void {
    this.form.patchValue(this.draftService.load('promo-form'));
    this.formValueChangesSubscription = this.form.valueChanges.subscribe(
      x => this.draftService.save('promo-form', x));
  }

  ngOnDestroy(): void {
    this.formValueChangesSubscription?.unsubscribe();
  }

}
