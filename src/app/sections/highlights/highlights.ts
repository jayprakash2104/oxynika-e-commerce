import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  imports: [],
  standalone: true,
  templateUrl: './highlights.html',
  styleUrl: './highlights.scss',
})
export class Highlights {
  highlights = [
    {
      icon: 'bi bi-flower1',
      title: '100% Natural',
      description: 'Pure Himalayan Shilajit'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Lab Tested',
      description: 'Purity & Safety Certified'
    },
    {
      icon: 'bi bi-image-alt',
      title: 'High Altitude Source',
      description: 'Harvested from the Himalayas'
    },
    {
      icon: 'bi bi-truck',
      title: 'Fast Delivery',
      description: 'PAN India Shipping'
    }
  ];

}
