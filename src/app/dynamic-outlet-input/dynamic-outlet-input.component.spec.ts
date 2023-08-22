import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicOutletInputComponent } from './dynamic-outlet-input.component';

describe('DynamicOutletInputComponent', () => {
  let component: DynamicOutletInputComponent;
  let fixture: ComponentFixture<DynamicOutletInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicOutletInputComponent]
    });
    fixture = TestBed.createComponent(DynamicOutletInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
