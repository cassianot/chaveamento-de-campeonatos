import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaocampeonatoComponent } from './gestaocampeonato.component';

describe('GestaocampeonatoComponent', () => {
  let component: GestaocampeonatoComponent;
  let fixture: ComponentFixture<GestaocampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaocampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaocampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
