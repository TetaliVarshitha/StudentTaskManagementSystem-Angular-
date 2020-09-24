import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfacultybyidComponent } from './viewfacultybyid.component';

describe('ViewfacultybyidComponent', () => {
  let component: ViewfacultybyidComponent;
  let fixture: ComponentFixture<ViewfacultybyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfacultybyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfacultybyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
