import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1DashbordComponent } from './v1-dashbord.component';

describe('V1DashbordComponent', () => {
  let component: V1DashbordComponent;
  let fixture: ComponentFixture<V1DashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1DashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1DashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
