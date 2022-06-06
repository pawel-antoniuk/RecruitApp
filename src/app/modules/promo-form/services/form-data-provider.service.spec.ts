import { TestBed } from '@angular/core/testing';

import { FormDataProviderService } from './form-data-provider.service';

describe('FormDataProvider', () => {
  let service: FormDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
