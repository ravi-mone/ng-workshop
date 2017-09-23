import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise11Component } from './exercise-11.component';

describe('Exercise11Component', () => {
  let component: Exercise11Component;
  let fixture: ComponentFixture<Exercise11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
