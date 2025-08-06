import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  callbackIn = Input();
  eventOut = Output();

  actionClick() {
    console.log('click en el boton');
    this.eventOut.emit(this.callbackIn());
  }
}
