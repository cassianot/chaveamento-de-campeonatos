import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizajogadorComponent } from './visualizajogador.component';

describe('VisualizajogadorComponent', () => {
  let component: VisualizajogadorComponent;
  let fixture: ComponentFixture<VisualizajogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizajogadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizajogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
