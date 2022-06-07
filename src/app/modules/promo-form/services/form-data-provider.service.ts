import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CacheService} from "./cache.service";
import {PromoFormData} from "../../../models/PromoFormData";
import {Subscription} from "rxjs";
import {FormStepService} from "./form-step.service";
import {DateRangeValidator} from "../validators/date-range-validator";

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
        benefitAmount: [],
        startDate: ['', Validators.required],
        endDate: [''],
        priceConditions: ['businessConditions'],
        connectWithOtherPromotions: [false],
        backPromotion: [false]
      })
    })
  })

  constructor(private cacheService: CacheService<PromoFormData>,
              private fb: FormBuilder,
              private stepService: FormStepService) {

    const startDateControl = this.sharedForm.get('definition.conditions.startDate');
    const endDateControl = this.sharedForm.get('definition.conditions.endDate');

    startDateControl?.addValidators(DateRangeValidator(endDateControl!,
      (a, b) => a < b));
    endDateControl?.addValidators(DateRangeValidator(startDateControl!,
      (a, b) => a > b));

    this.sharedFormInitialValues = this.sharedForm.value;
    this.updateAvailability();
    this.formValueChangesSubscription = this.sharedForm.valueChanges
      .subscribe((formData: PromoFormData) => this.valuesUpdated(formData));
  }

  ngOnDestroy(): void {
    this.formValueChangesSubscription?.unsubscribe();
  }

  public valuesUpdated(promoFormData: PromoFormData): void {
    this.cacheService.save(PROMO_FORM_KEY, promoFormData)
    this.updateAvailability(promoFormData)
  }

  public loadSavedContent(): void {
    let draft = this.cacheService.load(PROMO_FORM_KEY);
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
      this.cacheService.setDraft(PROMO_FORM_KEY, content);
      this.sharedForm.patchValue(content, {emitEvent: false});
    }
  }

  public clearAll() {
    this.cacheService.clearAll(PROMO_FORM_KEY);
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

    const controlPath = 'definition.conditions.benefitAmount';
    const benefitAmountControl = this.sharedForm.get(controlPath) as FormControl;

    if (promoFormData?.definition.conditions.type === 'type1') {
      benefitAmountControl.enable({emitEvent: false});
    } else {
      benefitAmountControl.disable({emitEvent: false});
    }
  }
}
