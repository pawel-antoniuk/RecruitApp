import {Component, OnInit} from '@angular/core';
import {DraftService} from "../../services/draft.service";
import {PromoAPIService} from "../../../shared-services/promo-api.service";


@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})
export class StepSummaryComponent implements OnInit {

  constructor(private draftService: DraftService,
              private promoAPI: PromoAPIService) {
  }

  ngOnInit(): void {
  }

  get summary(): any {
    const draft = this.draftService.loadAll();
    return JSON.stringify(draft, null, 4);
  }

  onSaveClicked() {
    this.promoAPI.postPromoForm().subscribe(() => {
      this.draftService.clearAll();
    })
  }
}
