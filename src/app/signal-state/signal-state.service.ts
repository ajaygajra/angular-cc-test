import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalStateService {
  // Define a signal for the counter value
  private counterSignal = signal(0);

  constructor() {
    // Optional: Log changes to the counterSignal for debugging
    effect(() => {
      console.log(`Counter value: ${this.counterSignal()}`);
    });
  }

  // Method to get the current value of the counter
  getCounter() {
    return this.counterSignal();
  }

  // Method to increment the counter
  increment() {
    this.counterSignal.update(count => count + 1);
  }

  // Method to decrement the counter
  decrement() {
    this.counterSignal.update(count => count - 1);
  }

  // Method to reset the counter
  reset() {
    this.counterSignal.set(0);
  }
}
