import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    {
      icon: 'scan',
      title: 'Instant Food Scanning',
      description: 'Simply scan any barcode to get an immediate health assessment of any grocery product.'
    },
    {
      icon: 'shield',
      title: 'Ingredient Analysis',
      description: 'Detect harmful additives, allergens, and toxic chemicals before they enter your home.'
    },
    {
      icon: 'family',
      title: 'Personalized for Your Family',
      description: 'Set dietary preferences and health goals for every family member individually.'
    },
    {
      icon: 'expert',
      title: 'Expert-Backed Insights',
      description: 'Recommendations validated by nutritionists and food scientists you can trust.'
    }
  ];
}
