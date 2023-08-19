import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredInputFeatureComponent } from './required-input-feature.component';

describe('RequiredInputFeatureComponent', () => {
  let component: RequiredInputFeatureComponent;
  let fixture: ComponentFixture<RequiredInputFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RequiredInputFeatureComponent]
    });
    fixture = TestBed.createComponent(RequiredInputFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
