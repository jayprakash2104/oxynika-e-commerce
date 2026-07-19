import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Button } from '../button/button';

@Component({
  selector: 'app-product-card',
  imports: [Button],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();

  buttonConfig = {
    type: 'button',
    text: 'Add to Cart',
    class: 'product-btn',
    icon: 'cart',
  }
}
