import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacampeonatosComponent } from './listacampeonatos.component';

describe('ListacampeonatosComponent', () => {
  let component: ListacampeonatosComponent;
  let fixture: ComponentFixture<ListacampeonatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacampeonatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListacampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
