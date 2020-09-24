import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallfacultyComponent } from './viewallfaculty.component';

describe('ViewallfacultyComponent', () => {
  let component: ViewallfacultyComponent;
  let fixture: ComponentFixture<ViewallfacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallfacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
