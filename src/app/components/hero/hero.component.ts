import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  avatars = [
    { initials: 'A', color: '#e8b4b8' },
    { initials: 'B', color: '#b4c8e8' },
    { initials: 'C', color: '#b4e8c8' },
    { initials: 'D', color: '#e8d4b4' },
    { initials: '+', color: '#c8c8c8' },
  ];

  backgroundProducts = [
    { left: '5%', top: '35%', size: 90, opacity: 0.5, rotate: '-8deg' },
    { left: '12%', top: '55%', size: 70, opacity: 0.4, rotate: '5deg' },
    { right: '5%', top: '35%', size: 90, opacity: 0.5, rotate: '8deg' },
    { right: '12%', top: '55%', size: 70, opacity: 0.4, rotate: '-5deg' },
  ];

  isVisible = false;

  ngOnInit(): void {
    setTimeout(() => (this.isVisible = true), 100);
  }
}
