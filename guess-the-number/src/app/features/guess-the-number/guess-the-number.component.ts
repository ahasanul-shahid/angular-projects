import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [ReactiveFormsModule],
  templateUrl: './guess-the-number.component.html',
  styleUrl: './guess-the-number.component.scss',
})
export class GuessTheNumberComponent implements OnInit {
  guessForm!: FormGroup;
  guessFeedback = '';
  attemptsRemaining = 10;
  gameOver = false;
  invalidInput = false;
  private _randomNumber!: number;
  private _fb = inject(FormBuilder);

  constructor() {}

  ngOnInit(): void {
    this.guessForm = this._fb.group({
      guess: this._fb.control(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
      ]),
    });
    this._randomNumber = this._generateRandomNumber();
  }

  onNewGuess(): void {
    if (this.guessForm.valid) {
      this.invalidInput = false;
      let guessValue = this.guessForm.get('guess')?.value;
      if (guessValue === this._randomNumber) {
        this.gameOver = true;
        this.guessFeedback = `You Won! Your guess (${guessValue}) is correct!`;
      } else if (guessValue < this._randomNumber) {
        this.guessFeedback = `Your guess (${guessValue}) is too low. Try again!`;
      } else {
        this.guessFeedback = `Your guess (${guessValue}) is too high. Try again!`;
      }
      this.attemptsRemaining--;
      if (this.attemptsRemaining === 0) {
        this.gameOver = true;
        this.guessFeedback = `You Lost! The number to guess was (${this._randomNumber})!`;
      }
    } else {
      this.invalidInput = true;
    }
    this.guessForm.get('guess')?.reset();
  }
  onNewGame(): void {
    this._randomNumber = this._generateRandomNumber();
    this.guessFeedback = '';
    this.guessForm.reset();
    this.attemptsRemaining = 10;
    this.gameOver = false;
  }
  private _generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
