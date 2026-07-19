import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  comment: string;
  product: string;
}

@Component({
  selector: 'app-testimonials', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
 @ViewChild('topRow', { static: true })
  topRow!: ElementRef<HTMLDivElement>;

  @ViewChild('bottomRow', { static: true })
  bottomRow!: ElementRef<HTMLDivElement>;

  readonly topTestimonials: Testimonial[] = [

    {
      id: 1,
      name: 'Priya Sharma',
      image: '/images/products/testimonials.webp',
      comment: 'I have been using Oxynika Shilajit every morning for the last three months. My energy levels have improved noticeably premium.',
      product: 'Himalayan Shilajit Resin'
    },

    {
      id: 2,
      name: 'Rahul Verma',
      image: '/images/products/testimonials.webp',
      comment: 'The Skin Care range feels gentle and luxurious. My skin looks healthier and feels hydrated throughout the day.',
      product: 'Skin Care Essentials'
    },

    {
      id: 3,
      name: 'Ananya Das',
      image: '/images/products/testimonials.webp',
      comment: 'The Hair Care Collection has become part of my weekly routine. My hair feels softer, healthier and stronger.',
      product: 'Hair Care Collection'
    },

    {
      id: 4,
      name: 'Amit Kumar',
      image: '/images/products/testimonials.webp',
      comment: 'The products arrived beautifully packed and the quality exceeded my expectations. Definitely ordering again.',
      product: 'Daily Wellness'
    },

    {
      id: 5,
      name: 'Sneha Patel',
      image: '/images/products/testimonials.webp',
      comment: 'Oxynika has become my trusted wellness brand. Every product I have tried feels thoughtfully crafted.',
      product: 'Immunity Support'
    },

    {
      id: 6,
      name: 'Ananya Das',
      image: '/images/products/testimonials.webp',
      comment: 'The Hair Care Collection has become part of my weekly routine. My hair feels softer, healthier and stronger.',
      product: 'Hair Care Collection'
    },

    {
      id: 4,
      name: 'Amit Kumar',
      image: '/images/products/testimonials.webp',
      comment: 'The products arrived beautifully packed and the quality exceeded my expectations. Definitely ordering again.',
      product: 'Daily Wellness'
    }

  ];

  readonly bottomTestimonials: Testimonial[] = [

    {
      id: 6,
      name: 'Rohit Mishra',
      image: '/images/products/testimonials.webp',
      comment: 'I started with Shilajit and now use multiple Oxynika products. The consistency and quality are outstanding.',
      product: 'Wellness Supplements'
    },

    {
      id: 7,
      name: 'Neha Kapoor',
      image: '/images/products/testimonials.webp',
      comment: 'The customer experience, packaging and product quality together make Oxynika feel like a premium wellness brand.',
      product: 'Skin Care Essentials'
    },

    {
      id: 8,
      name: 'Arjun Singh',
      image: '/images/products/testimonials.webp',
      comment: 'Daily Wellness has helped me stay consistent with my health goals. Highly recommended for busy professionals.',
      product: 'Daily Wellness'
    },

    {
      id: 9,
      name: 'Meera Nair',
      image: '/images/products/testimonials.webp',
      comment: 'The Hair Care products feel natural and nourishing. I have already recommended them to my family.',
      product: 'Hair Care Collection'
    },

    {
      id: 10,
      name: 'Vikram Joshi',
      image: '/images/products/testimonials.webp',
      comment: 'Excellent quality, fast delivery and beautiful presentation. It truly feels like a luxury wellness experience.',
      product: 'Himalayan Shilajit Resin'
    },
    
    {
      id: 11,
      name: 'Ananya Das',
      image: '/images/products/testimonials.webp',
      comment: 'The Hair Care Collection has become part of my weekly routine. My hair feels softer, healthier and stronger.',
      product: 'Hair Care Collection'
    },

    {
      id: 12,
      name: 'Amit Kumar',
      image: '/images/products/testimonials.webp',
      comment: 'The products arrived beautifully packed and the quality exceeded my expectations. Definitely ordering again.',
      product: 'Daily Wellness'
    }

  ];
}
