import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Desktop } from './layout';
import { MainWindow } from './components/main-window/main-window';
import { CardInfo } from '@shared/components/card-info/card-info';
import { Button } from './shared/components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Desktop,
    MainWindow,
    CardInfo,
    Button,
    CommonModule
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
