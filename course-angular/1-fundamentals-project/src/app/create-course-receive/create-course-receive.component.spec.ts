import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseReceiveComponent } from './create-course-receive.component';

describe('CreateCourseReceiveComponent', () => {
  let component: CreateCourseReceiveComponent;
  let fixture: ComponentFixture<CreateCourseReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
