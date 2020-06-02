import { TestBed } from '@angular/core/testing';

import { V1SignUpServiceService } from './v1-sign-up-service.service';

describe('V1SignUpServiceService', () => {
  let service: V1SignUpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V1SignUpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
