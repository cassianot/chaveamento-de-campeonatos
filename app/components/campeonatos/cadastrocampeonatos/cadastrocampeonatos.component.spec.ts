import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocampeonatosComponent } from './cadastrocampeonatos.component';

describe('CadastrocampeonatosComponent', () => {
  let component: CadastrocampeonatosComponent;
  let fixture: ComponentFixture<CadastrocampeonatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrocampeonatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrocampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
