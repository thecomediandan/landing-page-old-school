import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-window',
  imports: [
    CommonModule
  ],
  templateUrl: './window.html',
  styleUrl: './window.scss'
})
export class Window {
  titleWindow = input<string>('Window Component');
  widthWindow = input<string>('500px');
  heightWindow = input<string>('500px');

  // constructor() {
  //   console.log(this.title());
  // }

  // private setSize() {
  //   const element = document.querySelector('.window');
  //   if (element) {
  //     element.setAttribute('style', `width: ${this.sizeWidth()}; height: ${this.sizeHeight()};`);
  //   }
  // }

  // public close() {
  //   const element = document.querySelector('.window');
  //   if (element) {
  //     element.remove();
  //   }
  // }

  // public minimize() {
  //   const element = document.querySelector('.window');
  //   if (element) {
  //     element.setAttribute('style', 'display: none;');
  //   }
  // }

  // public maximize() {
  //   const element = document.querySelector('.window');
  //   if (element) {
  //     element.setAttribute('style', `width: 100%; height: 100%;`);
  //   }
  // }

  // public restore() {
  //   this.setSize();
  // }
}
