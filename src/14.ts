import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const x = Math.random();
    console.log(x);
  }
}
