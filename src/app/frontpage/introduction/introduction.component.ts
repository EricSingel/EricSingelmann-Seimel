import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  animations: [
    trigger('initAn',[
      state('false', 
        style({ opacity: 0, transform: 'translateX(-600px)' }),
      ),
      transition('false => true', [
        animate('750ms', style({opacity: 1, transform: 'translateX(0px)'}))
      ])
    ]) 
  ]
})
export class IntroductionComponent implements OnInit {
  init: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=> {
      this.init = true
    },100)
  }

}
