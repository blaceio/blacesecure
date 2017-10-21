import { TestBed, inject } from '@angular/core/testing';

import { DataalertService } from './dataalert.service';

describe('DataalertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataalertService]
    });
  });

  it('should be created', inject([DataalertService], (service: DataalertService) => {
    expect(service).toBeTruthy();
  }));
});
