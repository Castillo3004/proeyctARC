import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/layout/landing-layout.component'),
    title: 'Inicio',
    children:[
      {
        path: 'inicio',
        title: 'Inicio',
        loadComponent: () => import('./landing/pages/inicio/inicio.component'),
      },
      {
        path: 'scopus',
        title: 'Scopus Search',
        loadComponent: () => import('./landing/pages/scopus-search/scopus-search.component'),
      },
      {
        path: 'insert-data-rdf',
        title: 'Insert Data RDF',
        loadComponent: () => import('./landing/pages/insert-datos-rdf/insert-datos-rdf.component'),
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      }
    ]
  }
];
