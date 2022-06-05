import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {MessageDialogService} from "../../../dialog/message-dialog.service";
import {PromoFormData, PromoFormDataAvailableValues} from "../../../../models/PromoFormData";
import {DraftService} from "../../services/draft.service";

@Component({
  selector: 'app-step-definition',
  templateUrl: './step-definition.component.html',
  styleUrls: ['./step-definition.component.scss']
})
export class StepDefinitionComponent implements OnInit {

  private formValueChangesSubscription?: Subscription;

  availablePortalValues = Object.entries(
    PromoFormDataAvailableValues.definition.conditions.portal);
  availableTypeValues = Object.entries(
    PromoFormDataAvailableValues.definition.conditions.type);
  availablePriceConditionsValues = Object.entries(
    PromoFormDataAvailableValues.definition.conditions.priceConditions);

  form = this.fb.group({
    id: [''],
    definition: this.fb.group({
      description: this.fb.group({
        marketingName: ['', Validators.required],
        technicalName: [''],
        description: [''],
      }),
      conditions: this.fb.group({
        portal: ['', Validators.required],
        type: ['', Validators.required],
        benefitAmount: [''],
        startDate: ['', Validators.required],
        endDate: [''],
        priceConditions: ['businessConditions'],
        connectWithOtherPromotions: [false],
        backPromotion: [false]
      })
    })
  })

  constructor(private fb: FormBuilder,
              private draftService: DraftService<PromoFormData>,
              private messageDialog: MessageDialogService) {
  }

  ngOnInit(): void {
    let draft = this.draftService.load('promo-form');
    if (draft) {
      this.form.patchValue(draft);
    }
    this.formValueChangesSubscription = this.form.valueChanges.subscribe(x => {
      this.draftService.save('promo-form', x)
    });
  }

  ngOnDestroy(): void {
    this.formValueChangesSubscription?.unsubscribe();
  }

}
