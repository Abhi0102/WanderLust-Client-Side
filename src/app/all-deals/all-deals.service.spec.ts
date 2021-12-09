import { TestBed } from '@angular/core/testing';

import { AllDealsService } from './all-deals.service';

describe('AllDealsService', () => {
  let service: AllDealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllDealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
