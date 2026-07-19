import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Oxynika Wellness | Premium Himalayan Shilajit'
    },
    {
        path: 'shop',
        loadComponent: () => import('./pages/shop/shop').then(m => m.Shop),
        title: 'Shop | Oxynika Wellness'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
