import {Component, OnInit} from '@angular/core';
import {PromoAPIService} from "../../../../services/promo-api.service";
import {Router} from "@angular/router";
import {MessageDialogService} from "../../../dialog/message-dialog.service";
import {PromoFormData} from "../../../../models/PromoFormData";
import {DraftService} from "../../services/draft.service";


@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})
export class StepSummaryComponent implements OnInit {
  draft: PromoFormData | undefined;

  constructor(private draftService: DraftService<PromoFormData>,
              private promoAPI: PromoAPIService,
              private router: Router,
              private messageDialog: MessageDialogService) {
    this.draft = this.draftService.load('promo-form');
  }

  ngOnInit(): void {
  }

  get summary(): any {
    return JSON.stringify(this.draft, null, 4);
  }

  onSubmitClicked() {
    if(!this.draft) {
      this.messageDialog.showMessage('Error!', 'Nothing to save')
      return;
    }

    if (this.draft.id) {
      this.promoAPI.putPromo(this.draft.id, this.draft).subscribe(() => {
        this.router.navigate(['promo-list']).then(nav => {
          this.draftService.clearAll('promo-form');
        }, err => {
          this.messageDialog.showMessage('Error!', err);
        });
      })
    } else {
      this.promoAPI.postPromo(this.draft).subscribe(() => {
        this.router.navigate(['promo-list']).then(nav => {
          this.draftService.clearAll('promo-form');
        }, err => {
          this.messageDialog.showMessage('Error!', err);
        });
      })
    }
  }

  onClearClicked() {
    this.draftService.clearAll('promo-form');
    this.router.navigate(['promo-form']).then(nav => {
    }, err => {
      this.messageDialog.showMessage('Error!', err);
    });
  }
}
