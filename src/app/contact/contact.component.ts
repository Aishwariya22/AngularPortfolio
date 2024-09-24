import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
  ,
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('iconAnimation', [
      state('twitter', style({
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      })),
      state('linkedin', style({
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      })),
      state('github', style({
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      })),
      transition('* => *', [
        animate('300ms ease-in-out')
      ]),
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('300ms ease-in-out', style({ transform: 'scale(1)' })),
      ]),
    ]),
    trigger('buttonAnimation', [
      state('idle', style({
        transform: 'scale(1)',
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
      })),
      transition('idle <=> hovered', [
        animate('200ms ease-in-out')
      ]),
    ]),
  ],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  resumeButtonState = 'idle';
  submitButtonState = 'idle';

  constructor(private http: HttpClient) {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      // Call your backend API to send the email
      this.http.post('http://localhost:3000/send-email', this.formData, { responseType: 'text' })
        .subscribe(response => {
          console.log('Email sent successfully:', response);
          alert("Form Submitted Successfully!!")
          contactForm.reset();
        }, error => {
          console.error('Error sending email:', error);
        });
    }
  }
  // onSubmit(){
  //   console.log('Form submitted');
  // }
}
