import { TestBed } from '@angular/core/testing';

import { V1CardDetailsService } from './v1-card-details.service';

describe('V1CardDetailsService', () => {
  let service: V1CardDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V1CardDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
