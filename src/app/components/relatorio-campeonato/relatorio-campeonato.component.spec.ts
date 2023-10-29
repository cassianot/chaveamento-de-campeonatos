import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioCampeonatoComponent } from './relatorio-campeonato.component';

describe('RelatorioCampeonatoComponent', () => {
  let component: RelatorioCampeonatoComponent;
  let fixture: ComponentFixture<RelatorioCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioCampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
