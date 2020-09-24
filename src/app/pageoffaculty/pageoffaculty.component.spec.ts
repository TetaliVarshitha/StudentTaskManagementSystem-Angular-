import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageoffacultyComponent } from './pageoffaculty.component';

describe('PageoffacultyComponent', () => {
  let component: PageoffacultyComponent;
  let fixture: ComponentFixture<PageoffacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageoffacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageoffacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
