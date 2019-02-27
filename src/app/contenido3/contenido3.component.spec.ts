import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido3Component } from './contenido3.component';

describe('Contenido3Component', () => {
  let component: Contenido3Component;
  let fixture: ComponentFixture<Contenido3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contenido3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contenido3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
