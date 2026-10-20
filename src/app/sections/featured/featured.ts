import {
  afterNextRender,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef, inject
} from '@angular/core';

import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Featured implements OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  @ViewChild('productSwiper')
  productSwiper!: ElementRef<HTMLElement>;

  private resizeObserver?: ResizeObserver;
  private initialized = false;

  collectionTabs = [
    {
      id: 1,
      title: 'Featured',
      products: [
        {
          id: 1,
          badge: 'Best Seller',
          rating: 4.9,
          image: '/images/products/Oxynika-Shilajit-Resin.webp',
          name: 'Pure Himalayan Shilajit Resin',
          price: 899,
          originalPrice: 1199,
          category: 'shilajit',
        },
        {
          id: 2,
          badge: '',
          rating: 4.9,
          image: '/images/products/Oxynika-Shilajit-Gummies.webp',
          name: 'Shilajit Gummies',
          price: 699,
          originalPrice: 899,
          category: 'shilajit',
        },
        {
          id: 4,
          badge: 'Trending',
          rating: 5.0,
          image: '/images/products/p2.png',
          name: 'Daily Wellness Gummies',
          price: 999,
          originalPrice: 1299,
          category: 'shilajit',
        },
        {
          id: 5,
          badge: 'Trending',
          rating: 5.0,
          image: '/images/products/p3.png',
          name: 'Face Wash',
          price: 999,
          originalPrice: 1299,
          category: 'shilajit',
        },
        {
          id: 6,
          badge: 'Trending',
          rating: 5.0,
          image: '/images/products/p1.png',
          name: 'Moisturizer',
          price: 999,
          originalPrice: 1299,
          category: 'shilajit',
        },
      ],
    },
    {
      id: 2,
      title: 'Daily Wellness',
      products: [],
    },
    {
      id: 3,
      title: 'Skin Care',
      products: [],
    },
  ];

  selectedTab = this.collectionTabs[0];

  constructor() {
    afterNextRender(() => {
      this.initializeSwiper();
    });
  }

  private async initializeSwiper(): Promise<void> {
    const swiperElement = this.productSwiper?.nativeElement as
      | (HTMLElement & {
          initialize: () => void;
          swiper?: {
            update: () => void;
            slideTo: (index: number, speed?: number) => void;
          };
        })
      | undefined;

    if (!swiperElement || this.initialized) {
      return;
    }

    await customElements.whenDefined('swiper-container');

    Object.assign(swiperElement, {
      slidesPerView: 1.2,
      spaceBetween: 16,
      speed: 600,
      loop: false,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: '#featured-next',
        prevEl: '#featured-prev',
      },
      breakpoints: {
        576: { slidesPerView: 2.2, spaceBetween: 16 },
        768: { slidesPerView: 2.2, spaceBetween: 16 },
        992: { slidesPerView: 3, spaceBetween: 16 },
        1200: { slidesPerView: 4, spaceBetween: 16 },
      },
    });

    swiperElement.initialize();
    this.initialized = true;

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        swiperElement.swiper?.update();
      });

      this.resizeObserver.observe(swiperElement);
    }
  }

  selectTab(tab: (typeof this.collectionTabs)[number]): void {
    this.selectedTab = tab;
    this.cdr.detectChanges();
  
    const swiperElement = this.productSwiper?.nativeElement as
      | (HTMLElement & {
          swiper?: {
            update: () => void;
            slideTo: (index: number, speed?: number) => void;
          };
        })
      | undefined;
  
    requestAnimationFrame(() => {
      const swiper = swiperElement?.swiper;
  
      if (swiper) {
        swiper.update();
        swiper.slideTo(0, 0);
      }
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }
}
