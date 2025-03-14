import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) {}

  getData(): Promise<any> {
    return this.http.get(this.apiUrl);
  }
}
