import { Component, HostListener, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn',[
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('250ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'eric.singelmann';
  currentRoute = '';
  mobile: any = window.matchMedia('(max-width:1000px)').matches
  constructor(private router: Router){}



  ngOnInit(): void {
      this.currentRoute = this.router.url
      console.log(this.currentRoute)
      AOS.init({
        disable: this.mobile ? true : false
    });
      
  }

  
}