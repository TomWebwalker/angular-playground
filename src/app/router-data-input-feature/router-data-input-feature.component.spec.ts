import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDataInputFeatureComponent } from './router-data-input-feature.component';

describe('RouterDataInputFeatureComponent', () => {
  let component: RouterDataInputFeatureComponent;
  let fixture: ComponentFixture<RouterDataInputFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterDataInputFeatureComponent]
    });
    fixture = TestBed.createComponent(RouterDataInputFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
