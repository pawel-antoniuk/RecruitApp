import { Component, OnInit } from '@angular/core';
import {FormDataProviderService} from "../../services/form-data-provider.service";

@Component({
  selector: 'app-step-placeholder',
  templateUrl: './step-placeholder.component.html',
  styleUrls: ['./step-placeholder.component.scss']
})
export class StepPlaceholderComponent implements OnInit {

  constructor(formProvider: FormDataProviderService) { }

  ngOnInit(): void {
  }

}
