import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1MenuBarComponent } from './v1-menu-bar.component';

describe('V1MenuBarComponent', () => {
  let component: V1MenuBarComponent;
  let fixture: ComponentFixture<V1MenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1MenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
