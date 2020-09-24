import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageofstudentComponent } from './pageofstudent.component';

describe('PageofstudentComponent', () => {
  let component: PageofstudentComponent;
  let fixture: ComponentFixture<PageofstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageofstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageofstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
