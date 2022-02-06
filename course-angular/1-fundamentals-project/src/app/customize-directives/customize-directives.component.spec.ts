import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeDirectivesComponent } from './customize-directives.component';

describe('CustomizeDirectivesComponent', () => {
  let component: CustomizeDirectivesComponent;
  let fixture: ComponentFixture<CustomizeDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
