import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-menu',
  imports: [],
  templateUrl: './icon-menu.html',
  styleUrl: './icon-menu.scss'
})
export class IconMenu {
  imgUrl = input<string>('');
  altText = input<string>('');
  srcSet = input<string>('');
  label = input<string>('');
}
