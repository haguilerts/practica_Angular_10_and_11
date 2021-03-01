import { TestBed } from '@angular/core/testing';

import { ServicioSubDetallService } from './servicio-sub-detall.service';

describe('ServicioSubDetallService', () => {
  let service: ServicioSubDetallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSubDetallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
