import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrajogadorComponent } from './cadastrajogador.component';

describe('CadastrajogadorComponent', () => {
  let component: CadastrajogadorComponent;
  let fixture: ComponentFixture<CadastrajogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrajogadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrajogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
