import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1LoginComponent } from './v1-login.component';

describe('V1LoginComponent', () => {
  let component: V1LoginComponent;
  let fixture: ComponentFixture<V1LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
