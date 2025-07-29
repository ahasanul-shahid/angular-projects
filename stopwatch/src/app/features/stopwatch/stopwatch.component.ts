import { Component } from '@angular/core';
import { PadZeroPipe } from '../../shared/pipes/pad-zero.pipe';

@Component({
  selector: 'app-stopwatch',
  imports: [PadZeroPipe],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  seconds = 0;
  centiSeconds = 0;
  timerIntervalRef!: ReturnType<typeof setInterval>;
  isPaused = true;
  onStartTimer(){
    this.isPaused = false;
    this.timerIntervalRef = setInterval(() => {
        this.centiSeconds ++;
        if(this.centiSeconds===100){
          this.seconds ++;
          this.centiSeconds = 0;
        }
      }, 10);
  }
  onPauseTimer(){
    this.isPaused = true;
    clearInterval(this.timerIntervalRef);
  }
  onResetTimer(){
    this.isPaused = true;
    clearInterval(this.timerIntervalRef);
    this.seconds = 0;
    this.centiSeconds = 0;
  }
}
