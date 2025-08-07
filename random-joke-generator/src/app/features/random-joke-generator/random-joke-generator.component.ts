import { Component, inject } from '@angular/core';
import { RandomJokeGeneratorService } from '../../shared/services/random-joke-generator.service';
import { catchError, EMPTY, Observable, tap, timeout } from 'rxjs';
import { IRandomJoke } from '../../shared/interfaces/random-joke';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-random-joke-generator',
  imports: [AsyncPipe],
  templateUrl: './random-joke-generator.component.html',
  styleUrl: './random-joke-generator.component.scss',
})
export class RandomJokeGeneratorComponent {
  loading = false;
  loadingError = false;
  $randomJoke?: Observable<IRandomJoke>;
  private readonly _randomJokeGeneratorService = inject(
    RandomJokeGeneratorService
  );
  onNewJokeRequest() {
    this.loading = true;
    this.$randomJoke = this._randomJokeGeneratorService.fetchJoke().pipe(
      tap(() => {
        this.loading = false;
        this.loadingError = false;
      }),
      catchError(() => {
        this.loading = false;
        this.loadingError = true;
        return EMPTY;
      })
    );
  }
}
