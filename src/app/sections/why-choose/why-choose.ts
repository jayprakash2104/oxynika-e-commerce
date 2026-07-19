import { Component } from '@angular/core';
import { SectionHeading } from "../../shared/section-heading/section-heading";

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [SectionHeading],
  templateUrl: './why-choose.html',
  styleUrl: './why-choose.scss',
})
export class WhyChoose {
headingSegments: any = [
    { text: 'Crafted by ' },
    { text: 'Nature', highlight: true },
    { text: '. Perfected by ' },
    { text: 'Science.', highlight: true }
  ];

  headingDescription : string = "Every Oxynika product is thoughtfully formulated using premium ingredients, scientific research and uncompromising quality standards to help you build a healthier everyday lifestyle.";

}
