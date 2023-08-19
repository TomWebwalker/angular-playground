import {Component, computed, effect, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {takeUntilDestroyed, toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-signals-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-feature.component.html',
  styleUrls: ['./signals-feature.component.css']
})
export class SignalsFeatureComponent {

  // to display a value we are calling it as a function
  username = signal('Tom');
  useEmail = signal('test@example.com');
  counter = signal(0);
  // to change signal into observable we can use toObservable, it emits at the beginning
  count$ = toObservable(this.counter);
  countSignalFromObservable = toSignal(this.count$);


  // computed is used to combine signals
  userCombined = computed(() => `${this.username()} - ${this.useEmail()}`);

  constructor() {
    // runs at the beginning
    // runs when username actually changes, so not same value
    effect(() => console.log('I was changed!', this.username()));
    this.count$
      // takeUntilDestroyed is used to unsubscribe from the observable when component is destroyed
      .pipe(takeUntilDestroyed())
      .subscribe((value) => console.log('Count was changed!', value));
  }


  changeNameHandler() {
    // signal is settable, so we can set a new value by calling set
    this.username.set('Jerry');
    this.counter.set(this.counter() + 1);
  }
}
