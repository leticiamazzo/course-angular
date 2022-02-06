import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgContentComponent } from './directive-ng-content.component';

describe('DirectiveNgContentComponent', () => {
  let component: DirectiveNgContentComponent;
  let fixture: ComponentFixture<DirectiveNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
