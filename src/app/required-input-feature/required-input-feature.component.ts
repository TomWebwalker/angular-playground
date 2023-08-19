import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-required-input-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './required-input-feature.component.html',
  styleUrls: ['./required-input-feature.component.css']
})
export class RequiredInputFeatureComponent {
  // throws an error when not provided
  @Input({ required: true }) username = '';
}
