import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarchaveamentoComponent } from './listarchaveamento.component';

describe('ListarchaveamentoComponent', () => {
  let component: ListarchaveamentoComponent;
  let fixture: ComponentFixture<ListarchaveamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarchaveamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarchaveamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
