import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import * as THREE from 'three';

interface Experience {
  title: string;
  company: string;
  period: string;
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
export class ExperienceComponent implements OnInit{
  experiences: Experience[] = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "2020 - Present",
      description: "Led development of cutting-edge web applications using Angular and React. Implemented complex UI/UX designs and optimized performance for large-scale applications."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Developed and maintained full-stack applications using Node.js and Angular. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      period: "2016 - 2018",
      description: "Assisted in building responsive websites and e-commerce platforms. Gained expertise in HTML, CSS, and JavaScript while working on diverse client projects."
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
