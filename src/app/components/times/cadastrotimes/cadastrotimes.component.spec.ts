import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrotimesComponent } from './cadastrotimes.component';

describe('CadastrotimesComponent', () => {
  let component: CadastrotimesComponent;
  let fixture: ComponentFixture<CadastrotimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrotimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrotimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
