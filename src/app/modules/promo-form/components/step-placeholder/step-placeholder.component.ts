import { Component, OnInit } from '@angular/core';
import {FormProviderService} from "../../services/form-provider.service";

@Component({
  selector: 'app-step-placeholder',
  templateUrl: './step-placeholder.component.html',
  styleUrls: ['./step-placeholder.component.scss']
})
export class StepPlaceholderComponent implements OnInit {

  constructor(formProvider: FormProviderService) { }

  ngOnInit(): void {
  }

}
