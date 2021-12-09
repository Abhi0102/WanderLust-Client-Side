import { TestBed } from '@angular/core/testing';

import { HotdealsService } from './hotdeals.service';

describe('HotdealsService', () => {
  let service: HotdealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotdealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
