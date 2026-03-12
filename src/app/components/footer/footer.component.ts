import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = [
    {
      heading: 'Product',
      links: ['Features', 'Pricing', 'Download', 'Changelog']
    },
    {
      heading: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      heading: 'Resources',
      links: ['Food Database', 'Restaurants', 'Health Guide', 'API']
    },
    {
      heading: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    }
  ];
}
