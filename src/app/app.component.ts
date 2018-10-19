import { Component, HostListener, OnChanges, SimpleChanges} from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  game: Game;
  title = "2048!";

  constructor() {
    // Init Game
    this.game = new Game();
  }

  updateState() {
    let state = this.game.getState();
    console.log(state);

    if (state === 1) {
      this.title = "Won!";
    }

    if (state === -1) {
      this.title = "😞";
    }

    if (state === 0) {
      this.title = "2048!";
    }

    return state;
  }

  @HostListener('window:keydown.arrowup', ['$event'])
  slideUp(event: any) {
    if (this.updateState() === 0) {
      this.game.slideUp();
    }
  }

  @HostListener('window:keydown.arrowdown', ['$event'])
  slideDown(event: any) {
    if (this.updateState() === 0) {
      this.game.slideDown();
    }
  }

  @HostListener('window:keydown.arrowleft', ['$event'])
  slideLeft(event: any) {
    if (this.updateState() === 0) {
      this.game.slideLeft();
    }
  }

  @HostListener('window:keydown.arrowright', ['$event'])
  slideRight(event: any) {
    if (this.updateState() === 0) {
      this.game.slideRight();
    }
  }
}