import { TestBed } from '@angular/core/testing';

import { UserCrudService } from './user-crud.service';

describe('USERCRUDSERVICE =>', () => {
  let service: UserCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCrudService);
  });

  it('EL SERVICIO DEBE EXISTIR', () => {
    expect(service).toBeTruthy();
  });
});
