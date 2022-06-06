import { TestBed } from '@angular/core/testing';

import { FormDraftService } from './form-draft.service';

describe('FormDraftService', () => {
  let service: FormDraftService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
