import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizatimeComponent } from './visualizatime.component';

describe('VisualizatimeComponent', () => {
  let component: VisualizatimeComponent;
  let fixture: ComponentFixture<VisualizatimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizatimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizatimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
