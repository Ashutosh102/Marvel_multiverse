import { TestBed } from '@angular/core/testing';

import { MarvelAPIService } from './marvel-api.service';

describe('MarvelAPIService', () => {
  let service: MarvelAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
