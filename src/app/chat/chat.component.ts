import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  newMsg: string = '';

  constructor() {}

  handleClick() {
    // Implement the handleClick function to handle button click
  }
}
