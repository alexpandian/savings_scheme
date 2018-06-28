import { TestBed, inject } from '@angular/core/testing';

import { CustomerValidatorService } from './customer-validator.service';

describe('CustomerValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerValidatorService]
    });
  });

  it('should be created', inject([CustomerValidatorService], (service: CustomerValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
