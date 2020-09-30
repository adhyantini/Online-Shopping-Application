import { TestBed } from '@angular/core/testing';

import { GetUserListService } from './get-user-list.service';

describe('GetUserListService', () => {
  let service: GetUserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
