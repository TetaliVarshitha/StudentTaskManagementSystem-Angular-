import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydoubtsComponent } from './displaydoubts.component';

describe('DisplaydoubtsComponent', () => {
  let component: DisplaydoubtsComponent;
  let fixture: ComponentFixture<DisplaydoubtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydoubtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydoubtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
