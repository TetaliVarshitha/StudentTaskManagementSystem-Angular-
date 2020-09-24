import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivetaskComponent } from './givetask.component';

describe('GivetaskComponent', () => {
  let component: GivetaskComponent;
  let fixture: ComponentFixture<GivetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
