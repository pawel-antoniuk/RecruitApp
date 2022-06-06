import {Component, OnInit} from '@angular/core';
import {PromoAPIService} from "../../services/promo-api.service";
import {Router} from "@angular/router";
import {MessageDialogService} from "../dialog/message-dialog.service";
import {PromoFormData} from "../../models/PromoFormData";
import {FormDraftService} from "../promo-form/services/form-draft.service";
import {PromoFormRouterState} from "../../models/PromoFormRouterState";

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent implements OnInit {

  promoList: PromoFormData[] = [];
  promoListColumns = ['id', 'marketingName', 'edit', 'delete'];

  constructor(private promoAPI: PromoAPIService,
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

  navigateToPromoForm(action: 'fill' | 'clear', data: PromoFormData | undefined = undefined) {
    const state: PromoFormRouterState = {action, data};
    this.router.navigate(['promo-form'], {state}).then(() => {
    }, err => {
      this.messageDialog.showMessage('Error!', err);
    });
  }

  editPromo(promo: PromoFormData) {
    this.navigateToPromoForm('fill', promo);
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

  newPromo(): void {
    this.navigateToPromoForm('clear');
  }

  getPromoMarketingName(promo: PromoFormData): string {
    return promo.definition.description.marketingName;
  }

}
