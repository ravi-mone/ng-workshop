import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise6Component } from './exercise-6.component';

describe('Exercise6Component', () => {
  let component: Exercise6Component;
  let fixture: ComponentFixture<Exercise6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
