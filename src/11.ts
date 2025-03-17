import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular HttpClient Example';
  users: any;

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any[]) => {
      this.users = data;
    });
  }
}
