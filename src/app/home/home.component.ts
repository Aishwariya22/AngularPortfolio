import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
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
    ])
  ]
})
export class HomeComponent {

}
