import {Component, OnInit} from '@angular/core';
import {DraftService} from "../../../shared-services/draft.service";
import {PromoAPIService} from "../../../shared-services/promo-api.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})
export class StepSummaryComponent implements OnInit {

  constructor(private draftService: DraftService,
              private promoAPI: PromoAPIService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  get summary(): any {
    const draft = this.draftService.loadAll();
    return JSON.stringify(draft, null, 4);
  }

  onSaveClicked() {
    const draft = this.draftService.loadAll();
    this.promoAPI.postPromoForm(draft).subscribe(() => {
      this.router.navigate(['promo-list']).then(nav => {
        this.draftService.clearAll();
      }, err => {
        console.error(err);
      });
    })
  }
}
