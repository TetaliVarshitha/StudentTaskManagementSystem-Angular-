import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdoubtComponent } from './postdoubt.component';

describe('PostdoubtComponent', () => {
  let component: PostdoubtComponent;
  let fixture: ComponentFixture<PostdoubtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdoubtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
