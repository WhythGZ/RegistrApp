import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserCrudService } from './user-crud.service';

describe('UserCrudService', () => {
  let service: UserCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UserCrudService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('register an user'), () => {
    expect(service.checkData('21012946-4','Altair', 'Gonzalez', 'WhythGZ', 'alt.gonzalezq@duocuc.cl','duoc1234')).toBe(true);
  }

});
