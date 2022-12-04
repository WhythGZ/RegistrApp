import { TestBed } from '@angular/core/testing';

import { ClassesCrudService } from './classes-crud.service';

describe('ClassesCrudService', () => {
  let service: ClassesCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
