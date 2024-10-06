import { TestBed } from '@angular/core/testing';

import { RecommendproductsService } from './recommendproducts.service';

describe('RecommendproductsService', () => {
  let service: RecommendproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
