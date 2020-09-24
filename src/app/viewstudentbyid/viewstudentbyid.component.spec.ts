import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentbyidComponent } from './viewstudentbyid.component';

describe('ViewstudentbyidComponent', () => {
  let component: ViewstudentbyidComponent;
  let fixture: ComponentFixture<ViewstudentbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstudentbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstudentbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
