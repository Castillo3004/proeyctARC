import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private router = inject(Router);

  public menuItems;

  constructor(){

    this.menuItems = [
      { path: '/inicio', titulo: 'Inicio' },
      { path: '/scopus', titulo: 'Scopus Search' },
      { path: '/insert-data-rdf', titulo: 'Insert Data RDF' },
    ]

  }


}
