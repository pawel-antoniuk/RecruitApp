import {Component, OnInit} from '@angular/core';
import {PromoAPIService} from "../../services/promo-api.service";
import {Router} from "@angular/router";
import {MessageDialogService} from "../dialog/message-dialog.service";
import {PromoFormData} from "../../models/PromoFormData";
import {PromoFormRouterState} from "../../models/PromoFormRouterState";
import {YesNoDialogService} from "../dialog/yes-no-dialog.service";
import {Title} from "@angular/platform-browser";

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
              private messageDialog: MessageDialogService,
              private yesNoDialog: YesNoDialogService,
              private title: Title) {
  }

  ngOnInit(): void {
    this.reloadData()
    this.title.setTitle('List')
  }

  public navigateToPromoForm(action: 'fill' | 'clear', data?: PromoFormData): void {
    const state: PromoFormRouterState = {action, data};
    this.router.navigate(['promo-form'], {state}).then(() => {
    }, err => {
      this.messageDialog.showMessage('Error!', err);
    });
  }

  public editPromo(promo: PromoFormData): void {
    this.navigateToPromoForm('fill', promo);
  }

  public deletePromo(promo: PromoFormData): void {
    this.yesNoDialog.showMessage('Be careful!', 'Do you want delete this item?')
      .subscribe(r => {
        if (r) {
          this.promoAPI.deletePromo(promo.id).subscribe(result => {
            if (result.status === 'ok') {
              this.reloadData();
            } else {
              this.messageDialog.showMessage('Error!', result.message);
            }
          })
        }
      })
  }

  public newPromo(): void {
    this.navigateToPromoForm('clear');
  }

  public getPromoMarketingName(promo: PromoFormData): string {
    return promo.definition.description.marketingName;
  }

  private reloadData(): void {
    this.promoAPI.getAllPromos().subscribe(result => {
        if (result.status === 'ok') {
          this.promoList = result.payload!;
        } else {
          this.messageDialog.showMessage('Error!', 'Invalid form format')
        }
      }
    );
  }
}
