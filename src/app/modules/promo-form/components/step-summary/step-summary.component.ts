import {Component, OnInit} from '@angular/core';
import {PromoAPIService} from "../../../../services/promo-api.service";
import {Router} from "@angular/router";
import {MessageDialogService} from "../../../dialog/message-dialog.service";
import {PromoFormData} from "../../../../models/PromoFormData";
import {FormDataProviderService} from "../../services/form-data-provider.service";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})
export class StepSummaryComponent implements OnInit {
  formContent: PromoFormData | undefined;

  constructor(private formProvider: FormDataProviderService,
              private promoAPI: PromoAPIService,
              private router: Router,
              private messageDialog: MessageDialogService) {
  }

  ngOnInit(): void {
    this.formContent = this.formProvider.formContent;
  }

  public onSubmitClicked() {
    if (!this.formContent) {
      this.messageDialog.showMessage('Error!', 'Nothing to save')
      return;
    }

    if (this.formContent.id) {
      this.promoAPI.putPromo(this.formContent.id, this.formContent).subscribe(() => {
        this.router.navigate(['promo-list']).then(nav => {
          this.formProvider.clearAll();
        }, err => {
          this.messageDialog.showMessage('Error!', err);
        });
      })
    } else {
      this.promoAPI.postPromo(this.formContent).subscribe(() => {
        this.router.navigate(['promo-list']).then(nav => {
          this.formProvider.clearAll();
        }, err => {
          this.messageDialog.showMessage('Error!', err);
        });
      })
    }
  }

  public onClearClicked() {
    this.formProvider.clearAll();
    this.router.navigate(['promo-form']).then(nav => {
    }, err => {
      this.messageDialog.showMessage('Error!', err);
    });
  }

  public get isFormValid() {
    return this.formProvider.form.valid;
  }

  public get formDataRootControl(): AbstractControl {
    return this.formProvider.form;
  }
}
