import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  imports: [CommonModule],
  templateUrl: './card-info.html',
  styleUrl: './card-info.scss'
})
export class CardInfo {
  titleCard = input<string>('Card Info');
  cardWidth = input<number>(150);
}
