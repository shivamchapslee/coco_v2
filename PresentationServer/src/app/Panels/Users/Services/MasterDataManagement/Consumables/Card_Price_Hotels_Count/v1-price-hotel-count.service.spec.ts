import { TestBed } from '@angular/core/testing';

import { V1PriceHotelCountService } from './v1-price-hotel-count.service';

describe('V1PriceHotelCountService', () => {
  let service: V1PriceHotelCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V1PriceHotelCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
