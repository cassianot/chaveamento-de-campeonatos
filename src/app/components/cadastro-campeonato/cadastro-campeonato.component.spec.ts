import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCampeonatoComponent } from './cadastro-campeonato.component';

describe('CadastroCampeonatoComponent', () => {
  let component: CadastroCampeonatoComponent;
  let fixture: ComponentFixture<CadastroCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
