import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

fdescribe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Number of products in the service', () => {
    expect(service.productList.length).toEqual(10);
  });
});
