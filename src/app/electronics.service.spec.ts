import { TestBed } from '@angular/core/testing';

import { ElectronicsService } from './electronics.service';

fdescribe('ElectronicsService', () => {
  let service: ElectronicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Number of products in the Electronics service', () => {
    expect(service.productList.length).toEqual(5);
  });
});
