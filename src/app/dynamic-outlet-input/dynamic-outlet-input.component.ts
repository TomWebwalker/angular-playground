import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicOutletInputChildComponent} from "../dynamic-outlet-input-child/dynamic-outlet-input-child.component";
import {RequiredInputFeatureComponent} from "../required-input-feature/required-input-feature.component";

@Component({
  selector: 'app-dynamic-outlet-input',
  standalone: true,
  imports: [CommonModule, DynamicOutletInputChildComponent],
  templateUrl: './dynamic-outlet-input.component.html',
  styleUrls: ['./dynamic-outlet-input.component.css']
})
export class DynamicOutletInputComponent {
  selectedComponent = RequiredInputFeatureComponent;
}
