import { Component, inject } from '@angular/core';
import { GraphDBService } from '../../services/graphdb.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-datos-rdf',
  standalone: true,
  imports: [ CommonModule, FormsModule, HttpClientModule],
  providers: [GraphDBService],
  templateUrl: './insert-datos-rdf.component.html',
  styleUrl: './insert-datos-rdf.component.css'
})
export default class InsertDatosRDFComponent {

  data: string = '';
  response: any;

  private graphDBService = inject(GraphDBService);

  insertData() {
    this.graphDBService.insertData(this.data).subscribe(
      data => this.response = data,
      error => console.error('Error:', error)
    );
  }


}
