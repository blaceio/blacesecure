import { TestBed, inject } from '@angular/core/testing';

import { DatealertService } from './datealert.service';

describe('DatealertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatealertService]
    });
  });

  it('should be created', inject([DatealertService], (service: DatealertService) => {
    expect(service).toBeTruthy();
  }));
});
