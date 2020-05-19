import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1FilterSearchComponent } from './v1-filter-search.component';

describe('V1FilterSearchComponent', () => {
  let component: V1FilterSearchComponent;
  let fixture: ComponentFixture<V1FilterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1FilterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1FilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
