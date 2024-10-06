import { TestBed } from '@angular/core/testing';

import { IphonsService } from './iphons.service';

describe('IphonsService', () => {
  let service: IphonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IphonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
