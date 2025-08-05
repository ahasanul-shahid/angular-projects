import { Component } from '@angular/core';

type gameChoices = 'rock' | 'paper' | 'scissors';
@Component({
  selector: 'app-rock-paper-scissors',
  imports: [],
  templateUrl: './rock-paper-scissors.component.html',
  styleUrl: './rock-paper-scissors.component.scss',
})
export class RockPaperScissorsComponent {
  computerChoice: gameChoices | null = null;
  userChoice: gameChoices | null = null;
  gameOutcomeText = '';
  loading = false;
  readonly gameChoices: gameChoices[] = ['rock', 'paper', 'scissors'];

  onUserChoice(userChoice: gameChoices): void {
    this.resetGame();
    this.userChoice = userChoice;
    setTimeout(() => {
      this.loading = false;
      this.computerChoice = this._makeComputerChoice();
      if (this.computerChoice === userChoice) {
        this.gameOutcomeText = 'Its a draw!';
      } else {
        this._checkResult(userChoice);
      }
    }, 500);
    this.loading = true;
  }
  resetGame() {
    this.userChoice = null;
    this.computerChoice = null;
    this.gameOutcomeText = '';
  }
  private _makeComputerChoice(): gameChoices {
    return this.gameChoices[
      Math.floor(Math.random() * this.gameChoices.length)
    ] as gameChoices;
  }
  private _checkResult(userChoice: gameChoices) {
    switch (userChoice) {
      case 'rock': {
        this.gameOutcomeText =
          this.computerChoice === 'paper' ? 'You Lost!' : 'You Won!';
        break;
      }
      case 'paper': {
        this.gameOutcomeText =
          this.computerChoice === 'scissors' ? 'You Lost!' : 'You Won!';
        break;
      }
      case 'scissors': {
        this.gameOutcomeText =
          this.computerChoice === 'rock' ? 'You Lost!' : 'You Won!';
        break;
      }
      default: {
        break;
      }
    }
  }
}
