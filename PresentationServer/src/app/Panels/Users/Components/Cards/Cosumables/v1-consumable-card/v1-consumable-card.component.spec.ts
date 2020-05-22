import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1ConsumableCardComponent } from './v1-consumable-card.component';

describe('V1ConsumableCardComponent', () => {
  let component: V1ConsumableCardComponent;
  let fixture: ComponentFixture<V1ConsumableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1ConsumableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1ConsumableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
