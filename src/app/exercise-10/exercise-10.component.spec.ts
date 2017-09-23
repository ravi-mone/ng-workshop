import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise10Component } from './exercise-10.component';

describe('Exercise10Component', () => {
  let component: Exercise10Component;
  let fixture: ComponentFixture<Exercise10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
