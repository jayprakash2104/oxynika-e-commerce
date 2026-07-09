import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Navbar } from "../../sections/navbar/navbar";
import { Hero } from "../../sections/hero/hero";
import { Highlights } from "../../sections/highlights/highlights";
import { Featured } from "../../sections/featured/featured";
import { WhyChoose } from "../../sections/why-choose/why-choose";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Navbar, Hero, Highlights, Featured, WhyChoose],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
