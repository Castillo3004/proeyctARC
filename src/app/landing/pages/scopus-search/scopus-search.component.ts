import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraphDBService } from '../../services/graphdb.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-scopus-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule ],
  providers: [GraphDBService],
  templateUrl: './scopus-search.component.html',
  styleUrl: './scopus-search.component.css'
})
export default class ScopusSearchComponent {

  query: string = '';
  results: any;

  private readonly graphDBService = inject(GraphDBService);

  executeQuery() {
    this.graphDBService.querySPARQL(this.query).subscribe(
      data => this.results = data,
      error => console.error('Error:', error)
    );
  }

}
