import { TestBed } from '@angular/core/testing';

import { RamdomGuard } from './ramdom.guard';

describe('RamdomGuard', () => {
  let guard: RamdomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RamdomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
