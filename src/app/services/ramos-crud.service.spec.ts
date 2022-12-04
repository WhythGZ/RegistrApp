import { TestBed } from '@angular/core/testing';

import { RamosCrudService } from './ramos-crud.service';

describe('RamosCrudService', () => {
  let service: RamosCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamosCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
