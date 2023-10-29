import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarchaveamentoComponent } from './gerarchaveamento.component';

describe('GerarchaveamentoComponent', () => {
  let component: GerarchaveamentoComponent;
  let fixture: ComponentFixture<GerarchaveamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarchaveamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerarchaveamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
