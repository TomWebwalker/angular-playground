import { Component } from '@angular/core';
import {SignalsFeatureComponent} from "./signals-feature/signals-feature.component";
import {RequiredInputFeatureComponent} from "./required-input-feature/required-input-feature.component";
import {RouterOutlet} from "@angular/router";
import {DynamicOutletInputComponent} from "./dynamic-outlet-input/dynamic-outlet-input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    SignalsFeatureComponent,
    RequiredInputFeatureComponent,
    RouterOutlet,
    DynamicOutletInputComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'angular-playground';
}
