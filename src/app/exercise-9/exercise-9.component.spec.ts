import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise9Component } from './exercise-9.component';

describe('Exercise9Component', () => {
  let component: Exercise9Component;
  let fixture: ComponentFixture<Exercise9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
