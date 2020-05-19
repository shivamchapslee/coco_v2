import { TestBed } from '@angular/core/testing';

import { V1UrlService } from './v1-url.service';

describe('V1UrlService', () => {
  let service: V1UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V1UrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
