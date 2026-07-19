import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../models/navbar.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
navItems : NavItem[] = [
    {
        label: 'Home',
        route: '/',
        exact: true,
        activeRoute: true
    },
    {
        label: 'Shop',
        route: '/shop',
        activeRoute: true
    },
    {
        label: 'About',
        route: '/about',
        activeRoute: true
    },
    {
        label: 'Reviews',
        route: '/',
        fragment: 'testimonials',
        activeRoute: false
    },
    {
        label: 'Contact',
        route: '/contact',
        activeRoute: true
    }
];
}
