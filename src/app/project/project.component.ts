import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { CarauselComponent } from '../carausel/carausel.component';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,CarauselComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectComponent {
  // projects = [
  //   { name: 'Receipe Book', description: 'This is a website where we can search our favourite receipes and it will redirect to its youtube tutorial channel', image: 'assets/resturant.PNG', link:'https://myreceipebook.netlify.app/'},
  //   { name: 'Netflix Clone', description: 'This is a netflix clone using html, CSS , JS', image: 'assets/netflix.png', link:'https://clonedapp.netlify.app/'},
  //   { name: 'Foodmine Website', description: 'This is basically a resturants website, from where we can order food using Angular 16, Node JS, Express, Mongo DB. ', image: 'assets/resturant.PNG', link:'https://github.com/Aishwariya22/Foodmine_Website'}
  //   // Add more projects as needed
  // ];
  projects = [
    {
      name: 'Receipe Book',
      description: 'Discover your culinary passion with our one-stop website! Effortlessly search for recipes and access curated YouTube tutorials to cook along. Whether you’re an experienced chef or a kitchen novice, explore mouth-watering dishes from around the world and elevate every meal into an exciting adventure. Start cooking today!',
      image: 'assets/cook.jpeg',
      link: 'https://myreceipebook.netlify.app/',
      tags: ['React', 'JavaScript', 'CSS']
    },
    {
      name: 'Netflix Clone',
      description: 'Dive into the magic of streaming with our impressive Netflix Clone! Crafted with HTML, CSS, and JavaScript, this project mirrors the sleek interface of the leading platform. Enjoy dynamic movie grids, smooth navigation, and responsive design—bringing the binge-watching experience to life right in your browser!',
      image: 'assets/netflix.jpg',
      link: 'https://clonedapp.netlify.app/',
      tags: ['HTML', 'JavaScript', 'Tailwind CSS']
    },
    {
      name: 'Flavor Fusion',
      description: 'Experience effortless food ordering with FlavorFusion! Built on Angular 16, Node.js, Express.js, and MongoDB, our platform offers a sleek interface to browse menus, customize orders, and secure checkout. Whether for a quick snack or a gourmet meal, FlavorFusion is your ultimate culinary destination.',
      image: 'assets/foodmine.jpg',
      link: 'https://github.com/Aishwariya22/Foodmine_Website',
      tags: ['Angular 16', 'Node JS', 'MongoDB','Express JS']
    },
  ];
}
