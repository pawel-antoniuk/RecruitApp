import { Component, OnInit } from '@angular/core';
import {PromoAPIService} from "../../shared-services/promo-api.service";

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent implements OnInit {

  promoList: any[] = [];

  constructor(private promoAPI: PromoAPIService) { }

  ngOnInit(): void {
    this.promoAPI.getAllPromoForms().subscribe(result => {
      if(result.status === 'ok') {
        this.promoList = result.payload!;
      } else {
        console.error(result.message)
      }
    });
  }

}
