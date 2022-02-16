import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mobile: any = window.matchMedia('(max-width:1000px)').matches
  menuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  openMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
