import { TestBed, inject } from '@angular/core/testing';

import { SetorService } from './setor.service';

describe('SetorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetorService]
    });
  });

  it('should ...', inject([SetorService], (service: SetorService) => {
    expect(service).toBeTruthy();
  }));
});
