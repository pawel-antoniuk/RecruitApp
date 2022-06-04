import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {PromoRequestResult} from "../shared-viewmodels/PromoRequestResult";

const localStorageKey = 'PromoAPIMock';

function mockLoadPromos(): any[] {
  const item = localStorage.getItem(localStorageKey);
  return JSON.parse(item ?? '[]');
}

function mockSavePromos(promos: any[]) {
  localStorage.setItem(localStorageKey, JSON.stringify(promos));
}

// Mock API
@Injectable({
  providedIn: 'root'
})
export class PromoAPIService {

  constructor() {
  }

  public getAllPromos(): Observable<PromoRequestResult<any[]>> {
    const promos = mockLoadPromos();
    return of(new PromoRequestResult('ok', '', promos));
  }

  public postPromo(promo: any): Observable<PromoRequestResult<any>> {
    promo.id = Math.floor(Math.random() * 10000000);
    const promos = mockLoadPromos();
    promos.push(promo);
    mockSavePromos(promos);

    return of(new PromoRequestResult('ok', '', promo));
  }

  public putPromo(promoId: number, promo: any): Observable<PromoRequestResult<any>> {
    const promos = mockLoadPromos();
    const itemIndex = promos.find(p => p.id === promoId);

    if(itemIndex < 0) {
      return of(new PromoRequestResult('error', 'item not found'));
    } else {
      promos.splice(itemIndex, 1);
      promo.id = promoId;
      promos.push(promo)
      mockSavePromos(promos);
      return of(new PromoRequestResult('ok', '', promo));
    }
  }

  public deletePromo(promoId: number): Observable<PromoRequestResult<any>> {
    const promos = mockLoadPromos();
    const itemIndex = promos.findIndex(p => p.id === promoId);

    if(itemIndex < 0) {
      return of(new PromoRequestResult('error', 'item not found'));
    } else {
      promos.splice(itemIndex, 1);
      mockSavePromos(promos);
      return of(new PromoRequestResult('ok'));
    }
  }
}
