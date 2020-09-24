import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayalltasksComponent } from './displayalltasks.component';

describe('DisplayalltasksComponent', () => {
  let component: DisplayalltasksComponent;
  let fixture: ComponentFixture<DisplayalltasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayalltasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayalltasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
