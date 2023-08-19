import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-router-data-input-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router-data-input-feature.component.html',
  styleUrls: ['./router-data-input-feature.component.css']
})
// default export to make import path shorter
export default class RouterDataInputFeatureComponent {
  @Input() myName = '';
}
