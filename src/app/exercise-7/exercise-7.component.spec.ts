import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7Component } from './exercise-7.component';

describe('Exercise7Component', () => {
  let component: Exercise7Component;
  let fixture: ComponentFixture<Exercise7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
