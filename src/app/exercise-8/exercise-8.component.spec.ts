import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise8Component } from './exercise-8.component';

describe('Exercise8Component', () => {
  let component: Exercise8Component;
  let fixture: ComponentFixture<Exercise8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
