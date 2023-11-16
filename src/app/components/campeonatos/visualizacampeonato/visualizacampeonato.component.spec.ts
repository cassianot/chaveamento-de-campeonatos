import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacampeonatoComponent } from './visualizacampeonato.component';

describe('VisualizacampeonatoComponent', () => {
  let component: VisualizacampeonatoComponent;
  let fixture: ComponentFixture<VisualizacampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
