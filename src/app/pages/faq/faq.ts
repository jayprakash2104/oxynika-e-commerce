
import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Navbar } from "../../sections/navbar/navbar";
import { Footer } from '../../layout/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [
    Header,
    Navbar,
    Footer,
    RouterLink
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  searchTerm = '';
  selectedCategory = 'All';
  expandedId: number | null = 1;

  categories = [
    'All',
    'Products',
    'Usage & Safety',
    'Quality',
    'Orders & Shipping',
    'Returns',
  ];

  faqs: any[] = [
    {
      id: 1,
      category: 'Products',
      question: 'What is Shilajit?',
      answer:
        'Shilajit is a naturally occurring mineral-rich substance found in mountainous regions. It is traditionally used in Ayurveda and is available in different forms, including resin and gummies. Product composition and serving sizes can vary, so always check the label.',
    },
    {
      id: 2,
      category: 'Products',
      question: 'What is the difference between Shilajit resin and gummies?',
      answer:
        'Shilajit resin is a concentrated, resin-based format that requires following the serving instructions on its packaging. Gummies offer a convenient, pre-portioned format. Check each product label for ingredients, serving size, and directions.',
    },
    {
      id: 3,
      category: 'Products',
      question: 'Which Oxynika product should I choose?',
      answer:
        'Choose based on your preferred format, ingredient list, serving instructions, and personal needs. Compare the product details on our website. If you are unsure whether a supplement is suitable for you, ask a qualified healthcare professional.',
    },
    {
      id: 4,
      category: 'Usage & Safety',
      question: 'How should I take Shilajit resin?',
      answer:
        'Follow the serving size and directions printed on your specific product label. Do not exceed the recommended serving. Use the measuring tool supplied with the product, if provided, and keep it clean and dry.',
    },
    {
      id: 5,
      category: 'Usage & Safety',
      question: 'How should I take Shilajit gummies?',
      answer:
        'Follow the daily serving instructions printed on your gummies packaging. Do not assume that resin and gummies have the same concentration or serving size, and do not exceed the recommended amount.',
    },
    {
      id: 6,
      category: 'Usage & Safety',
      question: 'Are Shilajit supplements suitable for everyone?',
      answer:
        'No supplement is suitable for everyone. If you are pregnant or breastfeeding, have an existing medical condition, take medication, or have concerns about mineral intake, consult your healthcare professional before use.',
    },
    {
      id: 7,
      category: 'Usage & Safety',
      question: 'How should I store Shilajit resin?',
      answer:
        'Keep the container tightly closed in a cool, dry place away from direct sunlight and excessive heat. Avoid introducing moisture, use a clean and dry utensil, and follow the storage instructions and expiry date on the packaging.',
    },
    {
      id: 8,
      category: 'Quality',
      question: 'How can I check the quality of an Oxynika product?',
      answer:
        'Check the product label, batch number, manufacturing and expiry details, and any quality documentation available for that product. If you need a laboratory report or clarification about a batch, contact our support team.',
    },
    {
      id: 9,
      category: 'Quality',
      question: 'Where can I find the ingredients and serving information?',
      answer:
        'Review the product page and packaging for the ingredient list, serving size, directions, and other product information. If any detail is unclear or unavailable, contact our support team before purchasing or using the product.',
    },
    {
      id: 10,
      category: 'Orders & Shipping',
      question: 'Do you offer free shipping?',
      answer:
        'Oxynika advertises free shipping on orders above ₹999. Please check the current shipping terms and your checkout page for eligibility, exclusions, and any applicable charges.',
    },
    {
      id: 11,
      category: 'Orders & Shipping',
      question: 'How long will delivery take?',
      answer:
        'Delivery time depends on your delivery address, courier service, and order processing. Check the estimate shown during checkout and your dispatch confirmation for the latest tracking details.',
    },
    {
      id: 12,
      category: 'Orders & Shipping',
      question: 'How can I track my order?',
      answer:
        'Once your order has been dispatched, check the tracking details shared in your order confirmation or shipping notification. If you have not received tracking information, contact support with your order number.',
    },
    {
      id: 13,
      category: 'Orders & Shipping',
      question: 'Can I change or cancel my order?',
      answer:
        'Contact customer support as soon as possible with your order number. Changes or cancellations depend on whether the order has already been processed or dispatched, so they cannot be guaranteed.',
    },
    {
      id: 14,
      category: 'Returns',
      question: 'Can I return or exchange a product?',
      answer:
        'Returns and exchanges depend on Oxynika’s current return policy, the product condition, and the reason for the request. Contact support before sending anything back to confirm eligibility and the correct process.',
    },
    {
      id: 15,
      category: 'Returns',
      question: 'What should I do if my order arrives damaged or incorrect?',
      answer:
        'Contact customer support with your order number, a description of the issue, and clear photos of the product and packaging. The support team can review the issue and explain the available resolution under the current policy.',
    },
  ];

  get filteredFaqs(): any[] {
    const query = this.searchTerm.trim().toLowerCase();

    return this.faqs.filter((faq) => {
      const matchesCategory =
        this.selectedCategory === 'All' ||
        faq.category === this.selectedCategory;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.expandedId = this.filteredFaqs[0]?.id ?? null;
  }

  onSearch(value: string): void {
    this.searchTerm = value;
    this.expandedId = this.filteredFaqs[0]?.id ?? null;
  }

  toggleFaq(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  trackFaq(_index: number, faq: any): number {
    return faq.id;
  }
}
