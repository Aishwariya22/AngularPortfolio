import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { link } from 'fs';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger('50ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectComponent {
  projects = [
    { name: 'Receipe Book', description: 'This is a website where we can search our favourite receipes and it will redirect to its youtube tutorial channel', image: 'assets/resturant.PNG', link:'https://myreceipebook.netlify.app/'},
    { name: 'Netflix Clone', description: 'This is a netflix clone using html, CSS , JS', image: 'assets/netflix.png', link:'https://clonedapp.netlify.app/'},
    { name: 'Foodmine Website', description: 'This is basically a resturants website, from where we can order food using Angular 16, Node JS, Express, Mongo DB. ', image: 'assets/resturant.PNG', link:'https://github.com/Aishwariya22/Foodmine_Website'}
    // Add more projects as needed
  ];
}
