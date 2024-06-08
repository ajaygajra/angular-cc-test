import { Component } from '@angular/core';
import { SignalStateService } from '../signal-state.service';

@Component({
  selector: 'app-signal-counter',
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.css']
})
export class SignalCounterComponent {
  constructor(public signalStateService: SignalStateService) {}

  // Methods to interact with the service
  increment() {
    this.signalStateService.increment();
  }

  decrement() {
    this.signalStateService.decrement();
  }

  reset() {
    this.signalStateService.reset();
  }

  // Method to get the current counter value
  get counter() {
    return this.signalStateService.getCounter();
  }
}
