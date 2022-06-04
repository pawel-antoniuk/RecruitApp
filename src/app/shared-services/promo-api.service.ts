import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {PromoRequestResult} from "../shared-viewmodels/PromoRequestResult";

const localStorageKey = 'PromoAPIMock';

// Mock API
@Injectable({
  providedIn: 'root'
})
export class PromoAPIService {

  constructor() {
  }

  public getAllPromoForms(): Observable<PromoRequestResult<any[]>> {
    const item = localStorage.getItem(localStorageKey);
    const parsedItem = JSON.parse(item ?? '[]');
    return of(new PromoRequestResult('ok', '', parsedItem));
  }

  public postPromoForm(formVal: any): Observable<PromoRequestResult<any>> {
    formVal.id = Math.floor(Math.random() * 10000000);
    const item = localStorage.getItem(localStorageKey);
    const parsedItem = JSON.parse(item ?? '[]');
    parsedItem.push(formVal);
    localStorage.setItem(localStorageKey, JSON.stringify(parsedItem));

    return of(new PromoRequestResult('ok', '', formVal));
  }
}
