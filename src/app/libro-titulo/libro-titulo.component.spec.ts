import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroTituloComponent } from './libro-titulo.component';

describe('LibroTituloComponent', () => {
  let component: LibroTituloComponent;
  let fixture: ComponentFixture<LibroTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
