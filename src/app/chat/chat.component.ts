import { Component } from '@angular/core';
import { OpenAiService } from '../open-ai.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  newMsg: string = '';
  botResponse: string = '';

  constructor(private openAiService: OpenAiService) {}

  handleClick() {
    this.openAiService.getDataFromOpenAI(this.newMsg).subscribe(data => {
      this.botResponse = data;
    });
    this.newMsg = '';
  }
}
