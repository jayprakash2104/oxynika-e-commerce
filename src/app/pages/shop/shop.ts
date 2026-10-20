
import { Component, computed, signal } from '@angular/core';

import { Header } from '../../layout/header/header';
import { Navbar } from '../../sections/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../models/product.model';

interface Category {
  id: number;
  name: string;
}

interface SortOption {
  label: string;
  value: string;
}

interface GalleryItem {
  name: string;
  image: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [Header, Navbar, Footer, ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop {
  // ==========================================
  // CATEGORIES
  // ==========================================

  categories: Category[] = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Shilajit' },
    { id: 3, name: 'Skin Care' },
    { id: 4, name: 'Hair Care' },
    { id: 5, name: 'Supplements' },
  ];

  selectedCategory = signal<string>('All');
  searchTerm = signal<string>('');

  // ==========================================
  // SORTING
  // ==========================================

  sortDropdownOpen = false;
  selectedSort = 'Default';

  sortOptions: SortOption[] = [
    { label: 'Default', value: 'default' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Name: A to Z', value: 'name-asc' },
    { label: 'Name: Z to A', value: 'name-desc' },
  ];

  // ==========================================
  // HERO PRODUCT GALLERY
  // ==========================================

  // Base images. Replace these paths with your actual
  // product image paths if they differ.
  private readonly heroGalleryItems: GalleryItem[] = [
    {
      name: 'Himalayan Shilajit Resin',
      image: '/images/products/p1.png',
    },
    {
      name: 'Premium Shilajit Capsules',
      image: '/images/products/p2.png',
    },
    {
      name: 'Daily Wellness Gummies',
      image: '/images/products/p3.png',
    },
    {
      name: 'Wellness Essentials',
      image: '/images/products/p1.png',
    },
  ];

  // Duplicate each sequence so the CSS animation can loop
  // continuously without a visible jump.
  heroGallery: GalleryItem[] = [
    ...this.heroGalleryItems,
    ...this.heroGalleryItems,
  ];

  // The second column uses the reverse order and moves
  // in the opposite direction.
  private readonly heroGalleryReverseItems: GalleryItem[] = [
    ...this.heroGalleryItems,
  ].reverse();

  heroGalleryReverse: GalleryItem[] = [
    ...this.heroGalleryReverseItems,
    ...this.heroGalleryReverseItems,
  ];

  // ==========================================
  // PRODUCT CATALOGUE
  // ==========================================

  products = signal<Product[]>([
    {
      id: 1,
      name: 'Pure Himalayan Shilajit Resin',
      image: '/images/products/p1.png',
      price: 899,
      originalPrice: 1199,
      badge: 'Best Seller',
      rating: 4.9,
      category: 'Shilajit',
    },
    {
      id: 2,
      name: 'Premium Shilajit Capsules',
      image: '/images/products/p2.png',
      price: 799,
      originalPrice: 999,
      badge: 'New',
      rating: 4.8,
      category: 'Shilajit',
    },
    {
      id: 3,
      name: 'Ashwagandha Gummies',
      image: '/images/products/p3.png',
      price: 699,
      originalPrice: 899,
      badge: '',
      rating: 4.7,
      category: 'Supplements',
    },
    {
      id: 4,
      name: 'Daily Wellness Gummies',
      image: '/images/products/p2.png',
      price: 999,
      originalPrice: 1299,
      badge: 'Trending',
      rating: 5,
      category: 'Supplements',
    },
    {
      id: 5,
      name: 'Vitamin C Face Wash',
      image: '/images/products/p3.png',
      price: 549,
      originalPrice: 699,
      badge: '',
      rating: 4.6,
      category: 'Skin Care',
    },
    {
      id: 6,
      name: 'Hydrating Moisturizer',
      image: '/images/products/p1.png',
      price: 799,
      originalPrice: 999,
      badge: '',
      rating: 4.8,
      category: 'Skin Care',
    },
    {
      id: 7,
      name: 'Anti Hair Fall Shampoo',
      image: '/images/products/p2.png',
      price: 699,
      originalPrice: 899,
      badge: 'Trending',
      rating: 4.9,
      category: 'Hair Care',
    },
    {
      id: 8,
      name: 'Hair Growth Serum',
      image: '/images/products/p3.png',
      price: 999,
      originalPrice: 1299,
      badge: '',
      rating: 4.8,
      category: 'Hair Care',
    },
    {
      id: 9,
      name: 'Organic Shilajit Gummies',
      image: '/images/products/p1.png',
      price: 749,
      originalPrice: 899,
      badge: 'New',
      rating: 4.7,
      category: 'Shilajit',
    },
    {
      id: 10,
      name: 'Biotin Capsules',
      image: '/images/products/p2.png',
      price: 649,
      originalPrice: 799,
      badge: '',
      rating: 4.6,
      category: 'Supplements',
    },
  ]);

  // ==========================================
  // FILTERED AND SORTED PRODUCTS
  // ==========================================

  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    const query = this.searchTerm().trim().toLowerCase();

    const sortValue =
      this.sortOptions.find(
        option => option.label === this.selectedSort
      )?.value ?? 'default';

    // Filter products by selected category and search.
    let result = this.products().filter(product => {
      const matchesCategory =
        category === 'All' || product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    // Sort a copy to preserve the original product order.
    result = [...result];

    switch (sortValue) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;

      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case 'default':
      default:
        // Keep the original catalogue order.
        break;
    }

    return result;
  });

  // ==========================================
  // CATEGORY SELECTION
  // ==========================================

  selectCategory(category: Category): void {
    this.selectedCategory.set(category.name);
  }

  // ==========================================
  // SEARCH
  // ==========================================

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  // ==========================================
  // SORT SELECTION
  // ==========================================

  selectSort(sort: SortOption): void {
    this.selectedSort = sort.label;
    this.sortDropdownOpen = false;
  }
}
