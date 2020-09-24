import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayalldoubtsComponent } from './displayalldoubts.component';

describe('DisplayalldoubtsComponent', () => {
  let component: DisplayalldoubtsComponent;
  let fixture: ComponentFixture<DisplayalldoubtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayalldoubtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayalldoubtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
