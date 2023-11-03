import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('sumar OK', () => {
    expect(service.suma(2,5)).toBe(7);
  });

  it('multiplicacion OK', () => {
    expect(service.multiplicacion(2,5)).toBe(10);
  });
});
