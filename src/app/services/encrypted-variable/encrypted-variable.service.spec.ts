import { TestBed } from '@angular/core/testing';

import { EncryptedVariableService } from './encrypted-variable.service';

describe('EncryptedVariableService', () => {
  let service: EncryptedVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptedVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
