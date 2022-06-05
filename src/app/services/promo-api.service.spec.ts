import { TestBed } from '@angular/core/testing';

import { PromoAPIService } from './promo-api.service';

describe('PromoAPIService', () => {
  let service: PromoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
