import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicOutletInputChildComponent } from './dynamic-outlet-input-child.component';

describe('DynamicOutletInputChildComponent', () => {
  let component: DynamicOutletInputChildComponent;
  let fixture: ComponentFixture<DynamicOutletInputChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicOutletInputChildComponent]
    });
    fixture = TestBed.createComponent(DynamicOutletInputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
