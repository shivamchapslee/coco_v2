import { TestBed } from '@angular/core/testing';

import { GetConsumablesDetailsService } from './get-consumables-details.service';

describe('GetConsumablesDetailsService', () => {
  let service: GetConsumablesDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetConsumablesDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
