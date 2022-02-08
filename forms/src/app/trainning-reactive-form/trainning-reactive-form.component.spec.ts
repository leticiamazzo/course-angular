import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainningReactiveFormComponent } from './trainning-reactive-form.component';

describe('TrainningReactiveFormComponent', () => {
  let component: TrainningReactiveFormComponent;
  let fixture: ComponentFixture<TrainningReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainningReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainningReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
