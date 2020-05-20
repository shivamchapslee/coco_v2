import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1RoughComponent } from './v1-rough.component';

describe('V1RoughComponent', () => {
  let component: V1RoughComponent;
  let fixture: ComponentFixture<V1RoughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1RoughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1RoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
