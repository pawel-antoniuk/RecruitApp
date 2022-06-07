import {Component, OnInit} from '@angular/core';
import {FormDataProviderService} from "../../services/form-data-provider.service";

@Component({
  selector: 'app-step-definition',
  templateUrl: './step-definition.component.html',
  styleUrls: ['./step-definition.component.scss']
})
export class StepDefinitionComponent implements OnInit {


  constructor(private formProvider: FormDataProviderService) {
  }

  ngOnInit(): void {
    this.formProvider.loadSavedContent();
  }

  get form() {
    return this.formProvider.form;
  }

}
