import { TestBed } from '@angular/core/testing';

import { CategoriesoffersService } from './categoriesoffers.service';

describe('CategoriesoffersService', () => {
  let service: CategoriesoffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesoffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
