import {Component, OnInit} from '@angular/core';
import {PromoAPIService} from "../../../../services/promo-api.service";
import {Router} from "@angular/router";
import {MessageDialogService} from "../../../dialog/message-dialog.service";
import {PromoFormData} from "../../../../models/PromoFormData";
import {FormDataProviderService} from "../../services/form-data-provider.service";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

// For debugging purpose
function formatCamelCaseToWords(name: string) {
  return name.replace(/([A-Z])/g, m => " " + m)
    .replace(/^./, m => m.toUpperCase());
}

function generateFormSummaryTable(name: string, control: AbstractControl): any {
  let output = [];
  if (control instanceof FormControl) {
    output.push('<div class="control">')
    output.push(`<div class="control-header">${formatCamelCaseToWords(name)}</div>`);

    const validInfo = control.valid ? '' : '<div class="valid-info">❗</div>';

    if(control.value) {
      output.push(`<div class="control-value">${validInfo}${formatCamelCaseToWords(control.value)}</div>`);
    } else {
      output.push(`<div class="control-value empty">${validInfo}(empty)</div>`);
    }

    output.push('</div>')
  } else if (control instanceof FormGroup) {
    output.push(`<div class="group-header">${formatCamelCaseToWords(name)}</div>`);
    output.push('<div class="group">')
    for (let [name, child] of Object.entries(control.controls)) {
      output.push(generateFormSummaryTable(name, child));
    }
    output.push('</div>')
  }

  return output.join('');
}

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

  public get summary(): string {
    return generateFormSummaryTable('Form', this.formProvider.form);
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
}
