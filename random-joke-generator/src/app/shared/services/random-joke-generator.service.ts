import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IRandomJoke } from '../interfaces/random-joke';

@Injectable({
  providedIn: 'root',
})
export class RandomJokeGeneratorService {
  private readonly _apiUrl =
    'http://official-joke-api.appspot.com/jokes/random';
  private readonly _http = inject(HttpClient);

  constructor() {}

  fetchJoke(): Observable<IRandomJoke> {
    return this._http.get<IRandomJoke>(this._apiUrl);
  }
}
