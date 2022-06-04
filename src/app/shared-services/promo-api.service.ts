import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {PromoRequestResult} from "../promo-form/viewmodels/PromoRequestResult";

// Mock API
@Injectable({
  providedIn: 'root'
})
export class PromoAPIService {

  constructor() { }

  public postPromoForm(): Observable<PromoRequestResult> {
    return of(new PromoRequestResult('ok'));
  }
}
