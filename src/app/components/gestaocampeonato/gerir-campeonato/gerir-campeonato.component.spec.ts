import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirCampeonatoComponent } from './gerir-campeonato.component';

describe('GerirCampeonatoComponent', () => {
  let component: GerirCampeonatoComponent;
  let fixture: ComponentFixture<GerirCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerirCampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerirCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
