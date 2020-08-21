import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myportal';
  date: Date;
  // this.date = new Date();
  ngOnInit(): void {
    this.date = new Date();
  }
}
