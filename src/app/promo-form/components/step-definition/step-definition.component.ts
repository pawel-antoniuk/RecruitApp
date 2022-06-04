import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-step-definition',
  templateUrl: './step-definition.component.html',
  styleUrls: ['./step-definition.component.scss']
})
export class StepDefinitionComponent implements OnInit {

  form = this.fb.group({
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
