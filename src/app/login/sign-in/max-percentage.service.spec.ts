import { TestBed } from '@angular/core/testing';

import { MaxPercentageService } from './max-percentage.service';

describe('MaxPercentageService', () => {
  let service: MaxPercentageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaxPercentageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
