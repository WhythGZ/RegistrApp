import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserCrudService } from './user-crud.service';

describe('USERCRUDSERVICE =>', () => {
  let service: UserCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[IonicModule.forRoot(),HttpClientTestingModule]
    });
    service = TestBed.inject(UserCrudService);
  });

  it('EL SERVICIO DEBE EXISTIR', () => {
    expect(service).toBeTruthy();
  });
});
