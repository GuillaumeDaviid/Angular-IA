import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  newMsg: FormControl = new FormControl('');

  constructor() {}

  handleClick() {
    // Implement the handleClick function to handle button click
  }
}
