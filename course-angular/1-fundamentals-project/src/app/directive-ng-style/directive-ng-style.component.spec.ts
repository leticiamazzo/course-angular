import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgStyleComponent } from './directive-ng-style.component';

describe('DirectiveNgStyleComponent', () => {
  let component: DirectiveNgStyleComponent;
  let fixture: ComponentFixture<DirectiveNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveNgStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
