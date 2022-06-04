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
  draft: any = {};

  constructor(private draftService: DraftService,
              private promoAPI: PromoAPIService,
              private router: Router) {
    this.draft = this.draftService.load('promo-form');
  }

  ngOnInit(): void {
  }

  get summary(): any {
    return JSON.stringify(this.draft, null, 4);
  }

  onSubmitClicked() {
    if (this.draft.id) {
      this.promoAPI.putPromo(this.draft.id, this.draft).subscribe(() => {
        this.router.navigate(['promo-list']).then(nav => {
          this.draftService.clearAll('promo-form');
        }, err => {
          console.error(err);
        });
      })
    } else {
      this.promoAPI.postPromo(this.draft).subscribe(() => {
        this.router.navigate(['promo-list']).then(nav => {
          this.draftService.clearAll('promo-form');
        }, err => {
          console.error(err);
        });
      })
    }
  }

  onClearClicked() {
    this.draftService.clearAll('promo-form');
    this.router.navigate(['promo-form']).then(nav => {
    }, err => {
      console.error(err);
    });
  }
}
