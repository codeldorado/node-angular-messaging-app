import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';
  user: string = 'User1'; // Change this dynamically based on authentication

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.apiService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim() === '') return;
    this.apiService.sendMessage(this.newMessage, this.user).subscribe(() => {
      this.newMessage = '';
      this.loadMessages();
    });
  }
}
