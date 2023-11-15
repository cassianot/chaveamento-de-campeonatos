import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatimesComponent } from './listatimes.component';

describe('ListatimesComponent', () => {
  let component: ListatimesComponent;
  let fixture: ComponentFixture<ListatimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListatimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListatimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
