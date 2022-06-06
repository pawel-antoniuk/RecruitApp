import { Component, OnInit } from '@angular/core';
import {StepService} from "./services/step.service";

@Component({
  selector: 'app-promo-form',
  templateUrl: './promo-form.component.html',
  styleUrls: ['./promo-form.component.scss']
})
export class PromoFormComponent implements OnInit {

  constructor(public stepService: StepService) { }

  ngOnInit(): void {
  }

}
