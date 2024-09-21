import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

interface Feedback {
  author: string;
  role: string;
  content: string;
}
@Component({
  selector: 'app-carausel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="carousel-container">
      <div class="carousel" [@carouselAnimation]="currentIndex">
        <div class="card-container" *ngFor="let feedback of visibleFeedbacks; let i = index">
          <div class="card">
            <p class="content">"{{ feedback.content }}"</p>
            <p class="author">- {{ feedback.author }}</p>
            <p class="role">{{ feedback.role }}</p>
          </div>
        </div>
      </div>
      <button class="nav-button prev" (click)="prev()">&lt;</button>
      <button class="nav-button next" (click)="next()">&gt;</button>
    </div>
  `,
  styles: [`
    .carousel-container {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      padding: 20px 0;
    }
    .carousel {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }
    .card-container {
      flex: 0 0 calc(33.333% - 20px);
      margin: 0 10px;
    }
    .card {
      background-color: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .content {
      font-size: 1em;
      font-style: italic;
      margin-bottom: 10px;
      flex-grow: 1;
    }
    .author {
      font-weight: bold;
      margin-bottom: 5px;
    }
    .role {
      font-size: 0.9em;
      color: #6c757d;
    }
    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px 15px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .nav-button:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
    .prev {
      left: 10px;
    }
    .next {
      right: 10px;
    }
  `],
  animations: [
    trigger('carouselAnimation', [
      state('0', style({ transform: 'translateX(0)' })),
      state('1', style({ transform: 'translateX(-33.333%)' })),
      state('2', style({ transform: 'translateX(-66.666%)' })),
      transition('* => *', animate('500ms ease-in-out'))
    ])
  ]
})
export class CarauselComponent implements OnInit, OnDestroy {
  feedbacks: Feedback[] = [
    {
      author: 'John Doe',
      role: 'Senior Developer',
      content: 'An exceptional team player with a keen eye for detail. Always delivers high-quality work.'
    },
    {
      author: 'Jane Smith',
      role: 'Project Manager',
      content: 'Consistently exceeds expectations. A valuable asset to any development team.'
    },
    {
      author: 'Mike Johnson',
      role: 'CTO',
      content: 'Demonstrates strong problem-solving skills and a deep understanding of software architecture.'
    },
    {
      author: 'Emily Brown',
      role: 'UX Designer',
      content: 'Collaborates effectively with the design team, bringing technical insights to improve user experiences.'
    },
    {
      author: 'David Lee',
      role: 'Product Owner',
      content: 'Excellent at translating business requirements into technical solutions. A great communicator.'
    }
  ];

  currentIndex = 0;
  visibleFeedbacks: Feedback[] = [];
  private intervalId: any;

  ngOnInit() {
    this.updateVisibleFeedbacks();
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  updateVisibleFeedbacks() {
    this.visibleFeedbacks = [
      this.feedbacks[this.currentIndex],
      this.feedbacks[(this.currentIndex + 1) % this.feedbacks.length],
      this.feedbacks[(this.currentIndex + 2) % this.feedbacks.length]
    ];
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000); // Change slide every 5 seconds
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
    this.updateVisibleFeedbacks();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
    this.updateVisibleFeedbacks();
  }
}