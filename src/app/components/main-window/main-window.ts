import { Component } from '@angular/core';
import { MenuVertical } from '@shared/components/menu-vertical/menu-vertical';
import { Window } from '@shared/components/window/window';

@Component({
  selector: 'app-main-window',
  imports: [
    Window,
    MenuVertical
  ],
  templateUrl: './main-window.html',
  styleUrl: './main-window.scss'
})
export class MainWindow {
  // protected readonly titleWindow: string = 'Contáctame';
  // protected readonly title: string = 'Main Window';
  // @ViewChild('mainWindow') miElemento!: ElementRef;

  // ngAfterViewInit() {
  //   this.miElemento.nativeElement.style.color = 'red';
  //   this.miElemento.nativeElement.style.height = '500px';
  // }
}
