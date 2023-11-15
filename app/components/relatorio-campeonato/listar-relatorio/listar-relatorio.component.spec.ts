import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRelatorioComponent } from './listar-relatorio.component';

describe('ListarRelatorioComponent', () => {
  let component: ListarRelatorioComponent;
  let fixture: ComponentFixture<ListarRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRelatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
