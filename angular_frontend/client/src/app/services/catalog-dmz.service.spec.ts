import { TestBed } from '@angular/core/testing';

import { CatalogDMZService } from './catalog-dmz.service';

describe('CatalogDmzService', () => {
  let service: CatalogDMZService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogDMZService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
