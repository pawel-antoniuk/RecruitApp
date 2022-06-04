import {Component, OnInit} from '@angular/core';
import {PromoAPIService} from "../../shared-services/promo-api.service";
import {DraftService} from "../../shared-services/draft.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent implements OnInit {

  promoList: any[] = [];
  promoListColumns = ['id', 'marketingName', 'actions'];

  constructor(private promoAPI: PromoAPIService,
              private draftService: DraftService,
              private router: Router) {
  }

  private reloadData() {
    this.promoAPI.getAllPromos().subscribe(result => {
        if (result.status === 'ok') {
          this.promoList = result.payload!;
        }
      }
    );
  }

  ngOnInit(): void {
    this.reloadData()
  }

  editPromo(promo: any) {
    this.draftService.setDraft('promo-form', promo);
    this.router.navigate(['promo-form']).then(nav => {
    }, err => {
      console.error(err);
    });
  }

  deletePromo(promo: any) {
    this.promoAPI.deletePromo(promo.id).subscribe(result => {
      if (result.status === 'ok') {
        this.reloadData();
      } else {
        console.error(result.message)
      }
    })
  }

}
