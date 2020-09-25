import { TestBed } from '@angular/core/testing';

import { RetailerLoginService } from './retailer-login.service';

describe('RetailerLoginService', () => {
  let service: RetailerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
