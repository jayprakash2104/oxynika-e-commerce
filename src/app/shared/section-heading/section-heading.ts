import { Component, input  } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  imports: [],
  standalone: true,
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
})
export class SectionHeading {
tag = input<string>();
  heading = input.required<any>();
  description = input<string>();
  headingClass = input<string>('');
}
