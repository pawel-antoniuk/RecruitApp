import { TestBed } from '@angular/core/testing';

import { YesNoDialogService } from './yes-no-dialog.service';

describe('OkCancelDialogService', () => {
  let service: YesNoDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YesNoDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
