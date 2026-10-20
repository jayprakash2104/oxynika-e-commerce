import { Component, computed, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { NavItem } from '../../models/navbar.model';

type NavbarPanel = 'wishlist' | 'cart' | 'account' | 'search' | null;

interface PreviewProduct {
  name: string;
  category: string;
  image: string;
  price: number;
}

interface CartProduct extends PreviewProduct {
  quantity: number;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  activePanel = signal<NavbarPanel>(null);
  searchQuery = signal('');
  mobilePanel = signal<'wishlist' | 'account' | 'search' | null>(null);
  // Static preview data. Replace with real service data later.
  wishlistItems = signal<PreviewProduct[]>([
    {
      name: 'Shilajit Resin',
      category: 'Daily wellness',
      image: '/images/products/p1.png',
      price: 899,
    },
    {
      name: 'Shilajit Gummies',
      category: 'Wellness supplements',
      image: '/images/products/p2.png',
      price: 699,
    },
  ]);

  cartItems = signal<CartProduct[]>([]);

  cartCount = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );

  cartSubtotal = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  );

  navItems: NavItem[] = [
    {
      label: 'Home',
      route: '/',
      exact: true,
      activeRoute: true,
    },
    {
      label: 'Shop',
      route: '/shop',
      activeRoute: true,
    },
    {
      label: 'About',
      route: '/about',
      activeRoute: true,
    },
    {
      label: 'Reviews',
      route: '/',
      fragment: 'testimonials',
      activeRoute: false,
    },
    {
      label: 'Contact',
      route: '/contact',
      activeRoute: true,
    },
  ];

  constructor(private readonly router: Router) {}

  togglePanel(panel: Exclude<NavbarPanel, null>): void {
    this.activePanel.update((current) => current === panel ? null : panel);
  }

  closePanel(): void {
    this.activePanel.set(null);
  }

  panelTitle(): string {
    const titles: Record<Exclude<NavbarPanel, null>, string> = {
      wishlist: 'My wishlist',
      cart: 'Shopping cart',
      account: 'Choose your account',
      search: 'Search products',
    };

    const panel = this.activePanel();
    return panel ? titles[panel] : '';
  }

  removeWishlistItem(name: string): void {
    this.wishlistItems.update((items) =>
      items.filter((item) => item.name !== name),
    );
  }

  removeCartItem(name: string): void {
    this.cartItems.update((items) =>
      items.filter((item) => item.name !== name),
    );
  }

  onSearchInput(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  submitSearch(event: Event): void {
    event.preventDefault();

    const query = this.searchQuery().trim();

    this.closePanel();

    if (!query) {
      this.router.navigate(['/shop']);
      return;
    }

    this.router.navigate(['/shop'], {
      queryParams: { search: query },
    });
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  }
}