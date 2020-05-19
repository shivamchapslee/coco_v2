import { TestBed } from '@angular/core/testing';

import { V1SubDistrictsService } from './v1-sub-districts.service';

describe('V1SubDistrictsService', () => {
  let service: V1SubDistrictsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V1SubDistrictsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
