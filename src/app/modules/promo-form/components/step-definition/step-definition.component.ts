import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {MessageDialogService} from "../../../dialog/message-dialog.service";
import {PromoFormData} from "../../../../models/PromoFormData";
import {FormDraftService} from "../../services/form-draft.service";
import {FormDataProviderService} from "../../services/form-data-provider.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-definition',
  templateUrl: './step-definition.component.html',
  styleUrls: ['./step-definition.component.scss']
})
export class StepDefinitionComponent implements OnInit {


  constructor(private formProvider: FormDataProviderService) {
  }

  ngOnInit(): void {
    this.formProvider.loadCachedContent();
  }

  get form() {
    return this.formProvider.form;
  }

}
