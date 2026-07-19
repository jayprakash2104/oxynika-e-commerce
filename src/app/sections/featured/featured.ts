import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Featured {

  collectionTabs = [
    {
      id: 1,
      title: 'Featured',
      products: [
        {
          id: 1,
          badge: 'Best Seller',
          rating: 4.9,
          image: '/images/products/p1.png',
          name: 'Pure Himalayan Shilajit Resin',
          price: 899,
          originalPrice: 1199,
          category: 'shilajit'
        },
        {
          id: 2,
          badge: 'New',
          rating: 4.8,
          image: '/images/products/p2.png',
          name: 'Shilajit Capsules',
          price: 799,
          originalPrice: 999,
          category: 'shilajit'
        },
        {
          id: 3,
          badge: '',
          rating: 4.9,
          image: '/images/products/p3.png',
          name: 'Ashwagandha Gummies',
          price: 699,
          originalPrice: 899,
          category: 'shilajit'
        },
        {
          id: 4,
          badge: 'Trending',
          rating: 5.0,
          image: '/images/products/p2.png',
          name: 'Daily Wellness Gummies',
          price: 999,
          originalPrice: 1299,
          category: 'shilajit'
        },
        {
          id: 5,
          badge: 'Trending',
          rating: 5.0,
          image: '/images/products/p3.png',
          name: 'Face Wash',
          price: 999,
          originalPrice: 1299,
          category: 'shilajit'
        },
        {
          id: 6,
          badge: 'Trending',
          rating: 5.0,
          image: '/images/products/p1.png',
          name: 'Moisturizer',
          price: 999,
          originalPrice: 1299,
          category: 'shilajit'
        }
      ]
    },

    {
      id: 2,
      title: 'Daily Wellness',
      products: []
    },

    {
      id: 3,
      title: 'Skin Care',
      products: []
    },

    {
      id: 4,
      title: 'Hair Care',
      products: []
    }

  ];

  selectedTab = this.collectionTabs[0];

  selectTab(tab: any): void {

    this.selectedTab = tab;

  }

}