import { TestBed } from '@angular/core/testing';

import { V1LoginAuthenticationService } from './v1-login-authentication.service';

describe('V1LoginAuthenticationService', () => {
  let service: V1LoginAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V1LoginAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
