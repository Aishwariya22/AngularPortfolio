import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CarauselComponent } from '../carausel/carausel.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarauselComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  ,
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
    ,
    trigger('fadeIn', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('500ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  showIntro: boolean = false;
  des:boolean = false;
  showFirstMessage: boolean = true;
  showThirdMessage:boolean=false;
  ngOnInit() {
    setTimeout(() => {
      this.showIntro = true;
    }, 1000); // Delay of 1 second (1000 milliseconds)

    setTimeout(() => {
      this.des = true;
    }, 2000);
    setTimeout(() => {
      this.showFirstMessage = false;
    }, 4000); 
    setTimeout(()=>{
      this.showThirdMessage =true;
    }, 7000)
  }
  
}
