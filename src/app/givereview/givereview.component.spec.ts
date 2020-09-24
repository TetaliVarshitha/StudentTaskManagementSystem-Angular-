import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivereviewComponent } from './givereview.component';

describe('GivereviewComponent', () => {
  let component: GivereviewComponent;
  let fixture: ComponentFixture<GivereviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivereviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
