import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Navbar } from "../../sections/navbar/navbar";
import { SectionHeading } from "../../shared/section-heading/section-heading";
import { Highlights } from "../../sections/highlights/highlights";
import { Testimonials } from "../../sections/testimonials/testimonials";
import { Footer } from "../../layout/footer/footer";

@Component({
  selector: 'app-about',
  imports: [Header, Navbar, SectionHeading, Highlights, Testimonials, Footer],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
headingSegments: any = [
    { text: 'Wellness inspired by ' },
    { text: 'Nature', highlight: true },
    { text: '. refined through ' },
    { text: 'modern science.', highlight: true }
  ];

  headingDescription : string = "At Oxynika, wellness isn't a trend, it's a responsibility we take seriously. We create premium wellness products by combining carefully selected natural ingredients with rigorous, science-backed formulations. We believe true wellness comes from transparency, knowing exactly what goes into every product and why it's there. That belief drives everything we do, helping people embrace healthier, more intentional lifestyles every single day";

}
