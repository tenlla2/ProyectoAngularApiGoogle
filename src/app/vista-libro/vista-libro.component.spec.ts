import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaLibroComponent } from './vista-libro.component';

describe('VistaLibroComponent', () => {
  let component: VistaLibroComponent;
  let fixture: ComponentFixture<VistaLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
