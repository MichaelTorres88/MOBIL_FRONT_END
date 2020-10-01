import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAutorComponent } from './lautor.component';

describe('LAutorComponent', () => {
  let component: LAutorComponent;
  let fixture: ComponentFixture<LAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
