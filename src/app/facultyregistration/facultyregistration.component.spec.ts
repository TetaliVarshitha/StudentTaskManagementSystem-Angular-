import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyregistrationComponent } from './facultyregistration.component';

describe('FacultyregistrationComponent', () => {
  let component: FacultyregistrationComponent;
  let fixture: ComponentFixture<FacultyregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
