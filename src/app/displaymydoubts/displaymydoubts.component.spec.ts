import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymydoubtsComponent } from './displaymydoubts.component';

describe('DisplaymydoubtsComponent', () => {
  let component: DisplaymydoubtsComponent;
  let fixture: ComponentFixture<DisplaymydoubtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymydoubtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymydoubtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
