import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckreviewComponent } from './checkreview.component';

describe('CheckreviewComponent', () => {
  let component: CheckreviewComponent;
  let fixture: ComponentFixture<CheckreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
