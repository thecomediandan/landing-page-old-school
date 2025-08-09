import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconMenu } from '../icon-menu/icon-menu';

@Component({
  selector: 'app-menu-vertical',
  imports: [CommonModule, IconMenu],
  templateUrl: './menu-vertical.html',
  styleUrl: './menu-vertical.scss'
})
export class MenuVertical {
  menuWidth = input<number>(180);
  menuHeight = input<number>(472);
}
