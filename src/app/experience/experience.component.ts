import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Experience {
  title: string;
  company: string;
  period: string;
  client: string;
  description: string;
}
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms {{delay}}ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      title: "System Engineer",
      company: "Tata Consultancy Services",
      period: "2023 -present",
      client: "Deligenta",
      description: " Developed a fully responsive, user-centric web application for a customer help desk using Angular, JavaScript, and related frameworks. Implemented dynamic user interfaces that adapt to various devices, ensuring seamless user experiences across platforms. Integrated real-time support features and optimized performance for faster response times, contributing to increased customer satisfaction and streamlined support processes."
    },
    {
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      period: "2021 -2023",
      client: "Transamerica",
      description: "Orchestrated UI applications, increasing user satisfaction anddecreasing support requests. Streamlined development processes with reusable components, reducing time-to-market and increasing productivity. Collaborated with senior developers to improve codebase maintainability and reduce technical debt."
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
