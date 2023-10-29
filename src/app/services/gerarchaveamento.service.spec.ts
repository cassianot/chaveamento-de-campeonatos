import { TestBed } from '@angular/core/testing';

import { GerarchaveamentoService } from './gerarchaveamento.service';

describe('GerarchaveamentoService', () => {
  let service: GerarchaveamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerarchaveamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
