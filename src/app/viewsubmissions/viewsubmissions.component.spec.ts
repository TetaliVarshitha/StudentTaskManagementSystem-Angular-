import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubmissionsComponent } from './viewsubmissions.component';

describe('ViewsubmissionsComponent', () => {
  let component: ViewsubmissionsComponent;
  let fixture: ComponentFixture<ViewsubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
