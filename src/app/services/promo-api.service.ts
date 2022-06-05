import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {PromoRequestResultModel} from "../models/PromoRequestResultModel";
import {PromoFormData} from "../models/PromoFormData";

const mockLocalStorageKey = 'PromoAPIMock';

// Mock API
function mockGetAllPromos(): PromoFormData[] {
  const item = localStorage.getItem(mockLocalStorageKey);
  return JSON.parse(item ?? '[]');
}

function mockGetPromo(promoId: number): PromoFormData | undefined {
  const item = localStorage.getItem(mockLocalStorageKey);
  const promos =  JSON.parse(item ?? '[]');
  return promos.find((p: PromoFormData) => p.id === promoId);
}

function mockPostPromo(promo: PromoFormData) {
  const promos = mockGetAllPromos();
  promo.id = Math.floor(Math.random() * 10000000);
  promos.push(promo);
  localStorage.setItem(mockLocalStorageKey, JSON.stringify(promos));

  return promo;
}

function mockPutPromo(promoId: number, promo: PromoFormData): PromoFormData | undefined {
  const promos = mockGetAllPromos();
  const itemIndex = promos.findIndex((p: PromoFormData) => p.id === promoId);

  if (itemIndex < 0) {
    return undefined;
  } else {
    promos.splice(itemIndex, 1);
    promo.id = promoId;
    promos.push(promo)
    localStorage.setItem(mockLocalStorageKey, JSON.stringify(promos));

    return promo;
  }
}

function mockDeletePromo(promoId: number): boolean {
  const promos = mockGetAllPromos();
  const itemIndex = promos.findIndex((p: PromoFormData) => p.id === promoId);

  if (itemIndex < 0) {
    return false;
  } else {
    promos.splice(itemIndex, 1);
    localStorage.setItem(mockLocalStorageKey, JSON.stringify(promos));
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PromoAPIService {

  constructor() {
  }

  public getAllPromos(): Observable<PromoRequestResultModel<PromoFormData[]>> {
    const promos = mockGetAllPromos();
    return of(new PromoRequestResultModel('ok', '', promos));
  }

  public postPromo(promo: PromoFormData)
    : Observable<PromoRequestResultModel<PromoFormData>> {

    const postedPromo = mockPostPromo(promo)
    return of(new PromoRequestResultModel('ok', '', postedPromo));
  }

  public putPromo(promoId: number, promo: PromoFormData)
    : Observable<PromoRequestResultModel<PromoFormData | null>> {

    const result = mockPutPromo(promoId, promo);
    if(result) {
      return of(new PromoRequestResultModel('ok', '', result));
    } else {
      return of(new PromoRequestResultModel('error', 'item not found'));
    }
  }

  public deletePromo(promoId: number): Observable<PromoRequestResultModel> {
    const result = mockDeletePromo(promoId);
    if (result) {
      return of(new PromoRequestResultModel('ok'));
    } else {
      return of(new PromoRequestResultModel('error', 'item not found'));
    }
  }
}
