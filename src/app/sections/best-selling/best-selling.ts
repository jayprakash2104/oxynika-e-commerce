import { Component } from '@angular/core';
import { SectionHeading } from "../../shared/section-heading/section-heading";

@Component({
  selector: 'app-best-selling',
  imports: [SectionHeading],
  templateUrl: './best-selling.html',
  styleUrl: './best-selling.scss',
})
export class BestSelling {
  headingSegments: any = [
    { text: 'Wellness for ' },
    { text: 'Every Lifestyle', highlight: true },
  ];

  headingDescription: string = "Discover thoughtfully curated wellness collections crafted for your everyday journey.";
}
