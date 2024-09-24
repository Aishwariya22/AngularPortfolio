import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CarauselComponent } from '../carausel/carausel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarauselComponent, CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('600ms ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ]),
    trigger('fadeIn', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('500ms ease-in'))
    ]),
  ]
})
export class HomeComponent implements OnInit {
  showIntro: boolean = false;
  des: boolean = false;
  showFirstMessage: boolean = true;
  showThirdMessage: boolean = false;
  faComment = faComment;
  faTimes = faTimes;
  isChatOpen = false;
  messages: Message[] = [];
  inputMessage = '';

  private predefinedAnswers: { [key: string]: string } = {
    'hi': 'I am a chatbot here to assist you. Please let me know what information you would like to know: notice period, CCTC, or ECTC. Thank you!',
    'notice period': 'The notice period is 3 months.',
    'cctc': '4.63 LPA',
    'ectc': '9 LPA',
  };

  ngOnInit() {
    setTimeout(() => {
      this.showIntro = true;
    }, 1000);

    setTimeout(() => {
      this.des = true;
    }, 2000);

    setTimeout(() => {
      this.showFirstMessage = false;
    }, 4000);

    setTimeout(() => {
      this.showThirdMessage = true;
    }, 7000);
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.inputMessage.trim()) {
      this.messages.push({ text: this.inputMessage, sender: 'user' });
      
      const botResponse = this.getBotResponse(this.inputMessage);
      
      setTimeout(() => {
        this.messages.push({
          text: botResponse,
          sender: 'bot'
        });
      }, 1000);

      this.inputMessage = '';
    }
  }

  private getBotResponse(userMessage: string): string {
    const lowercaseMessage = userMessage.toLowerCase().trim();
    
    for (const [key, value] of Object.entries(this.predefinedAnswers)) {
      if (lowercaseMessage === key) {
        return value;
      }
    }

    // Check for partial matches
    for (const [key, value] of Object.entries(this.predefinedAnswers)) {
      if (lowercaseMessage.includes(key)) {
        return value;
      }
    }

    // Default response if no predefined answer is found
    return "I'm not sure about that. Please go through Aishwariya's portfolio or contact her for more details.";
  }
}