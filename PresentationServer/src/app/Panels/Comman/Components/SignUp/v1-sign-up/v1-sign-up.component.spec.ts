import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1SignUpComponent } from './v1-sign-up.component';

describe('V1SignUpComponent', () => {
  let component: V1SignUpComponent;
  let fixture: ComponentFixture<V1SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1SignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
