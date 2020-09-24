import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletefacultyComponent } from './deletefaculty.component';

describe('DeletefacultyComponent', () => {
  let component: DeletefacultyComponent;
  let fixture: ComponentFixture<DeletefacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletefacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletefacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
