import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalCounterComponent } from './signal-counter/signal-counter.component';
import { SignalStateService } from './signal-state.service';

@NgModule({
  declarations: [SignalCounterComponent],
  imports: [CommonModule],
  exports: [SignalCounterComponent],
  providers: [SignalStateService]
})
export class SignalStateModule {}
