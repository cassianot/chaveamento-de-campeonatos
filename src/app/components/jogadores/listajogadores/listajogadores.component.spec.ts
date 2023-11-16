import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListajogadoresComponent } from './listajogadores.component';

describe('ListajogadoresComponent', () => {
  let component: ListajogadoresComponent;
  let fixture: ComponentFixture<ListajogadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListajogadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListajogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
