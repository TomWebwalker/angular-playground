import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsFeatureComponent } from './signals-feature.component';

describe('SignalsFeatureComponent', () => {
  let component: SignalsFeatureComponent;
  let fixture: ComponentFixture<SignalsFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalsFeatureComponent]
    });
    fixture = TestBed.createComponent(SignalsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
