import { TestBed, inject } from '@angular/core/testing';

import { RemotecallService } from './remotecall.service';

describe('RemotecallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemotecallService]
    });
  });

  it('should be created', inject([RemotecallService], (service: RemotecallService) => {
    expect(service).toBeTruthy();
  }));
});
