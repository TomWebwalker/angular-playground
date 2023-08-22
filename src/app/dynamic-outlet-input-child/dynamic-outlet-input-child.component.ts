import {Component, Input, Type} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-outlet-input-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-outlet-input-child.component.html',
  styleUrls: ['./dynamic-outlet-input-child.component.css']
})
export class DynamicOutletInputChildComponent {
  @Input() component!: Type<any>;
}
