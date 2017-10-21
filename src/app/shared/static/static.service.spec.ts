import { TestBed, inject } from '@angular/core/testing';

import { StaticDataService } from './static.service';

describe('StaticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticDataService]
    });
  });

  it('should be created', inject([StaticDataService], (service: StaticDataService) => {
    expect(service).toBeTruthy();
  }));
});
