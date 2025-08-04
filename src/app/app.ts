import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Desktop } from './layout';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Desktop
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-page-old-school');
}
