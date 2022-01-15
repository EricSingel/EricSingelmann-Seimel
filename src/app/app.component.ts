import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ericsingelmann';
  currentRoute = '';

  constructor(private router: Router){}

  ngOnInit(): void {
      this.currentRoute = this.router.url
      console.log(this.currentRoute)
  }
}
