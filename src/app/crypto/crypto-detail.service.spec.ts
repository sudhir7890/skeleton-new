import { TestBed } from '@angular/core/testing';

import { CryptoDetailService } from './crypto-detail.service';

describe('CryptoDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptoDetailService = TestBed.get(CryptoDetailService);
    expect(service).toBeTruthy();
  });
});
