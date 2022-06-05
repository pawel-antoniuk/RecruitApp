import {Component, OnInit} from '@angular/core';
import {PromoAPIService} from "../../services/promo-api.service";
import {Router} from "@angular/router";
import {MessageDialogService} from "../dialog/message-dialog.service";
import {PromoFormData} from "../../models/PromoFormData";
import {DraftService} from "../promo-form/services/draft.service";

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent implements OnInit {

  promoList: PromoFormData[] = [];
  promoListColumns = ['id', 'marketingName', 'actions'];

  constructor(private promoAPI: PromoAPIService,
              private draftService: DraftService<PromoFormData>,
              private router: Router,
              private messageDialog: MessageDialogService) {
  }

  private reloadData() {
    this.promoAPI.getAllPromos().subscribe(result => {
        if (result.status === 'ok') {
          this.promoList = result.payload!;
        } else {
          this.messageDialog.showMessage('Error!', 'Invalid form format')
        }
      }
    );
  }

  ngOnInit(): void {
    this.reloadData()
  }

  editPromo(promo: PromoFormData) {
    this.draftService.setDraft('promo-form', promo);
    this.router.navigate(['promo-form']).then(nav => {
    }, err => {
      this.messageDialog.showMessage('Error!', err);
    });
  }

  deletePromo(promo: PromoFormData) {
    this.promoAPI.deletePromo(promo.id).subscribe(result => {
      if (result.status === 'ok') {
        this.reloadData();
      } else {
        this.messageDialog.showMessage('Error!', result.message);
      }
    })
  }

  onNewClicked(): void {
    this.draftService.clearAll('promo-form')
    this.router.navigate(['promo-form']).then(nav => {
    }, err => {
      this.messageDialog.showMessage('Error!', err);
    });
  }

  getPromoMarketingName(promo: PromoFormData): string {
    return promo.definition.description.marketingName;
  }

}
