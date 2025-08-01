import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss',
})
export class TicTacToeComponent {
  board: ('' | 'X' | 'O')[] = Array(9).fill('');
  moveTurn: 'X' | 'O' = 'X';
  gameOver = false;
  gameResultMsg = '';
  gameOutcome?: 'X' | 'O' | 'DRAW';

  makeMove(index: number): void {
    if (!this.gameOver && this.board[index] === '') {
      this.board[index] = this.moveTurn;
      this.gameOver = this.checkWinner(this.moveTurn, index);
      if (this.gameOver) {
        this.gameOutcome = this.moveTurn;
        this.gameResultMsg = `Player ${this.moveTurn} wins!`;
        return;
      }
      if (!this.board.includes('')) {
        this.gameOver = true;
        this.gameOutcome = 'DRAW';
        this.gameResultMsg = 'The game ended in draw!';
        return;
      }
      this.moveTurn = this.moveTurn === 'X' ? 'O' : 'X';
    }
  }

  checkWinner(move: 'X' | 'O', index: number): boolean {
    let gotWinner = false;
    gotWinner =
      (this.board[0] === move &&
        this.board[1] === move &&
        this.board[2] === move) ||
      (this.board[0] === move &&
        this.board[3] === move &&
        this.board[6] === move) ||
      (this.board[2] === move &&
        this.board[5] === move &&
        this.board[8] === move) ||
      (this.board[1] === move &&
        this.board[4] === move &&
        this.board[7] === move) ||
      (this.board[3] === move &&
        this.board[4] === move &&
        this.board[5] === move) ||
      (this.board[6] === move &&
        this.board[7] === move &&
        this.board[8] === move);
    if (!gotWinner && [0, 2, 4, 6, 8].includes(index)) {
      gotWinner =
        (this.board[0] === move &&
          this.board[4] === move &&
          this.board[8] === move) ||
        (this.board[2] === move &&
          this.board[4] === move &&
          this.board[6] === move);
    }
    return gotWinner;
  }

  onNewGame(): void {
    this.board = Array(9).fill('');
    this.moveTurn = 'X';
    this.gameOver = false;
    this.gameResultMsg = '';
    this.gameOutcome = undefined;
  }
}
