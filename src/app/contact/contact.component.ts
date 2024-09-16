import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
  ,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // constructor(private http: HttpClient) {}

  // onSubmit(form: any) {
  //   if (form.valid) {
  //     // Call your backend API to send the email
  //     this.http.post('http://your-backend-api-url/send-email', this.formData)
  //       .subscribe(response => {
  //         console.log('Email sent successfully:', response);
  //       }, error => {
  //         console.error('Error sending email:', error);
  //       });
  //   }
  // }
  onSubmit(){

  }
}
