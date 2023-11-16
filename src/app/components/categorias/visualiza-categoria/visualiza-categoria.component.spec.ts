import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaCategoriaComponent } from './visualiza-categoria.component';

describe('VisualizaCategoriaComponent', () => {
  let component: VisualizaCategoriaComponent;
  let fixture: ComponentFixture<VisualizaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
