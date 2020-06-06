import { TestBed } from '@angular/core/testing';

import { V1WishlistUpdateService } from './v1-wishlist-update.service';

describe('V1WishlistUpdateService', () => {
  let service: V1WishlistUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V1WishlistUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
