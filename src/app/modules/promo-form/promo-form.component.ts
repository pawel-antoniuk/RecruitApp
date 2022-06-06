import {Component, OnInit} from '@angular/core';
import {FormStepService} from "./services/form-step.service";
import {FormProviderService} from "./services/form-provider.service";
import {PromoFormData} from "../../models/PromoFormData";
import {PromoFormRouterState} from "../../models/PromoFormRouterState";
import {Router} from "@angular/router";

@Component({
  selector: 'app-promo-form',
  templateUrl: './promo-form.component.html',
  styleUrls: ['./promo-form.component.scss']
})
export class PromoFormComponent implements OnInit {

  constructor(public stepService: FormStepService,
              private router: Router,
              private formProvider: FormProviderService) {
    const state = router.getCurrentNavigation()?.extras.state as PromoFormRouterState | undefined;
    if (state) {
      if (state.action == 'fill') {
        formProvider.formContent = state.data;
      } else {
        formProvider.clearAll();
      }
    }
  }

  ngOnInit(): void {
  }

  get currentStepLabel() {
    return this.stepService.getCurrentStepLabel();
  }

}
