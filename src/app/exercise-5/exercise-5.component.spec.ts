import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5Component } from './exercise-5.component';

describe('Exercise5Component', () => {
  let component: Exercise5Component;
  let fixture: ComponentFixture<Exercise5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
