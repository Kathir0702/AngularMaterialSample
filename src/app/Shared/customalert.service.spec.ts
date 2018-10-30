import { TestBed, inject } from '@angular/core/testing';

import { CustomalertService } from './customalert.service';

describe('CustomalertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomalertService]
    });
  });

  it('should be created', inject([CustomalertService], (service: CustomalertService) => {
    expect(service).toBeTruthy();
  }));
});
