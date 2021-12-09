import { TestBed } from '@angular/core/testing';

import { PlannedTripsService } from './planned-trips.service';

describe('PlannedTripsService', () => {
  let service: PlannedTripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannedTripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
