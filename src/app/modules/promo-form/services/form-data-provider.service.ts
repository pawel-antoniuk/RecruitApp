import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormDraftService} from "./form-draft.service";
import {PromoFormData} from "../../../models/PromoFormData";
import {Subscription} from "rxjs";
import {FormStepService} from "./form-step.service";

const PROMO_FORM_KEY = 'promo-form';

@Injectable({
  providedIn: 'any'
})
export class FormDataProviderService {

  private formValueChangesSubscription?: Subscription;
  private readonly sharedFormInitialValues: PromoFormData;
  private sharedForm = this.fb.group({
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

  constructor(private draftService: FormDraftService<PromoFormData>,
              private fb: FormBuilder,
              private stepService: FormStepService) {

    this.sharedFormInitialValues = this.sharedForm.value;
    this.updateAvailability();
    this.formValueChangesSubscription = this.sharedForm.valueChanges
      .subscribe((formData: PromoFormData) => this.valuesUpdated(formData));
  }

  ngOnDestroy(): void {
    this.formValueChangesSubscription?.unsubscribe();
  }

  public valuesUpdated(promoFormData: PromoFormData): void {
    this.draftService.save(PROMO_FORM_KEY, promoFormData)
    this.updateAvailability(promoFormData)
  }

  public loadSavedContent(): void {
    let draft = this.draftService.load(PROMO_FORM_KEY);
    if (draft) {
      this.sharedForm.patchValue(draft, {emitEvent: false});
      this.updateAvailability(draft)
    }
  }

  public get form(): FormGroup {
    return this.sharedForm;
  }

  public get formContent(): PromoFormData | undefined {
    return this.sharedForm.getRawValue();
  }

  public set formContent(content: PromoFormData | undefined) {
    if (content !== undefined) {
      this.draftService.setDraft(PROMO_FORM_KEY, content);
      this.sharedForm.patchValue(content);
    }
  }

  public clearAll() {
    this.draftService.clearAll(PROMO_FORM_KEY);
    this.sharedForm.reset(this.sharedFormInitialValues);
  }

  private updateAvailability(promoFormData?: PromoFormData): void {
    if (promoFormData?.definition.description.marketingName
      || promoFormData?.definition.description.technicalName) {

      this.stepService.updateSteps([
        {
          id: 'step-placeholder3',
          available: false,
          tooltip: 'Lorem ipsum dolor sit amet',
        },
        {
          id: 'step-placeholder4',
          available: false,
          tooltip: 'Lorem ipsum dolor sit amet',
        }
      ]);
    } else {
      this.stepService.updateSteps([
        {
          id: 'step-definition',
          available: true,
          tooltip: '',
        },
      ], false, 'Provide \'Marketing name\' or \'Technical name\' ' +
        'in step 2 to make this step available');
    }
  }
}
