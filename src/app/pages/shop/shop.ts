import { Component, computed, signal } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Navbar } from "../../sections/navbar/navbar";
import { Hero } from "../../sections/hero/hero";
import { Footer } from '../../layout/footer/footer';
import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../models/product.model';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-shop',
  imports: [Header, Navbar, Hero, Footer, ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop {
  // Define the list of categories for filtering products
  categories: Category[] = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Shilajit' },
    { id: 3, name: 'Skin Care' },
    { id: 4, name: 'Hair Care' },
    { id: 5, name: 'Supplements' }
  ];

  // Sort options for sorting products
  sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'popular', label: 'Popularity' },
    { value: 'low-high', label: 'Price : Low to High' },
    { value: 'high-low', label: 'Price : High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  // Products list to be displayed on the shop page
  products = signal<Product[]>([

    {
      id: 1,
      name: 'Pure Himalayan Shilajit Resin',
      image: '/images/products/p1.png',
      price: 899,
      originalPrice: 1199,
      badge: 'Best Seller',
      rating: 4.9,
      category: 'Shilajit'
    },

    {
      id: 2,
      name: 'Premium Shilajit Capsules',
      image: '/images/products/p2.png',
      price: 799,
      originalPrice: 999,
      badge: 'New',
      rating: 4.8,
      category: 'Shilajit'
    },

    {
      id: 3,
      name: 'Ashwagandha Gummies',
      image: '/images/products/p3.png',
      price: 699,
      originalPrice: 899,
      badge: '',
      rating: 4.7,
      category: 'Supplements'
    },

    {
      id: 4,
      name: 'Daily Wellness Gummies',
      image: '/images/products/p2.png',
      price: 999,
      originalPrice: 1299,
      badge: 'Trending',
      rating: 5,
      category: 'Supplements'
    },

    {
      id: 5,
      name: 'Vitamin C Face Wash',
      image: '/images/products/p3.png',
      price: 549,
      originalPrice: 699,
      badge: '',
      rating: 4.6,
      category: 'Skin Care'
    },

    {
      id: 6,
      name: 'Hydrating Moisturizer',
      image: '/images/products/p1.png',
      price: 799,
      originalPrice: 999,
      badge: '',
      rating: 4.8,
      category: 'Skin Care'
    },

    {
      id: 7,
      name: 'Anti Hair Fall Shampoo',
      image: '/images/products/p2.png',
      price: 699,
      originalPrice: 899,
      badge: 'Trending',
      rating: 4.9,
      category: 'Hair Care'
    },

    {
      id: 8,
      name: 'Hair Growth Serum',
      image: '/images/products/p3.png',
      price: 999,
      originalPrice: 1299,
      badge: '',
      rating: 4.8,
      category: 'Hair Care'
    },

    {
      id: 9,
      name: 'Organic Shilajit Gummies',
      image: '/images/products/p1.png',
      price: 749,
      originalPrice: 899,
      badge: 'New',
      rating: 4.7,
      category: 'Shilajit'
    },

    {
      id: 10,
      name: 'Biotin Capsules',
      image: '/images/products/p2.png',
      price: 649,
      originalPrice: 799,
      badge: '',
      rating: 4.6,
      category: 'Supplements'
    }

  ]);
  


}
