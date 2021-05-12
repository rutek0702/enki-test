import { TestBed } from '@angular/core/testing';

import { PackageProviderService } from './package-provider.service';

describe('PackageProviderService', () => {
  let service: PackageProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
