import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphDBService {

  private apiUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  querySPARQL(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/graphdb/query`, { params: { query } });
  }

  insertData(data: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/graphdb/data`, { data });
  }
}
