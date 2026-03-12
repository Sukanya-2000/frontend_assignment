import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems = [
    { label: 'Solutions', hasDropdown: true },
    { label: 'Features', hasDropdown: false },
    { label: 'Pricing', hasDropdown: false },
    { label: 'Blog', hasDropdown: true },
    { label: 'Restaurants', hasDropdown: false },
    { label: 'Food', hasDropdown: true },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
