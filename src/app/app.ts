import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Desktop } from './layout';
import { MainWindow } from './components/main-window/main-window';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Desktop,
    MainWindow
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-page-old-school');

  saludar() {
    alert('click en el boton');
  }
}
