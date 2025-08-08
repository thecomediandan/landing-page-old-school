import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Button } from '@shared/components/button/button';

@Component({
  selector: 'app-menu-vertical',
  imports: [Button, CommonModule],
  templateUrl: './menu-vertical.html',
  styleUrl: './menu-vertical.scss'
})
export class MenuVertical {
  menuWidth = input<number>(180);
  menuHeight = input<number>(472);
}
