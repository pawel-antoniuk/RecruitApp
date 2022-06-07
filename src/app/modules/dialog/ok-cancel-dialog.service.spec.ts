import { TestBed } from '@angular/core/testing';

import { OkCancelDialogService } from './ok-cancel-dialog.service';

describe('OkCancelDialogService', () => {
  let service: OkCancelDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OkCancelDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
