import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';

import { CommonService } from '../../services/common.service';
import { Header } from '../../layout/header/header';
import { Navbar } from "../../sections/navbar/navbar";
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [
    Header,
    Navbar,
    Footer,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly commonService = inject(CommonService);

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  contactForm = this.fb.nonNullable.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(254),
      ],
    ],
    phone: [
      '',
      [Validators.pattern(/^[+]?[\d\s()-]{7,20}$/)],
    ],
    subject: ['', Validators.required],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(2000),
      ],
    ],
  });

  get f() {
    return this.contactForm.controls;
  }

  submitContactForm(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.isSubmitting) {
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.errorMessage = 'Please correct the highlighted fields.';
      return;
    }

    this.isSubmitting = true;

    const value = this.contactForm.getRawValue();

    const payload = {
      name: value.fullName.trim(),
      email: value.email.trim(),
      phone: value.phone.trim(),
      subject: value.subject,
      message: value.message.trim(),
    };

    this.commonService
      .sendMessage(payload)
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
        next: () => {
          this.successMessage =
            'Thank you! Your message has been sent successfully.';
          this.contactForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 0) {
            this.errorMessage =
              'Unable to connect. Please check your internet connection.';
          } else if (error.status === 400 || error.status === 422) {
            this.errorMessage =
              error.error?.message ||
              'Please check your details and try again.';
          } else if (error.status === 429) {
            this.errorMessage =
              'Too many requests. Please try again later.';
          } else if (error.status >= 500) {
            this.errorMessage =
              'Our server is temporarily unavailable. Please try again later.';
          } else {
            this.errorMessage =
              error.error?.message ||
              'We could not send your message. Please try again.';
          }
        },
      });
  }

}
