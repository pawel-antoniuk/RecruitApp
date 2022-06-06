import { TestBed } from '@angular/core/testing';

import { CanActivateStepGuard } from './can-activate-step.guard';

describe('CanActivateStepGuard', () => {
  let guard: CanActivateStepGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateStepGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
