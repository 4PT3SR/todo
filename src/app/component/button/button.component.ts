import { Component, Input,Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() icon:string = ''
  @Output() clicked = new EventEmitter();

  onClickHandler() {
    this.clicked.emit()
  }
  // @Input() onClick:() => void = () => console.log('');

  // check() {
  //   console.log('ckicked')
  // }
}
