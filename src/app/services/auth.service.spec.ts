import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('EL SERVICIO DE AUTH DEBERIA EXISTIR Y/O SER CREADO', () => {
    expect(service).toBeTruthy();
  });
});
