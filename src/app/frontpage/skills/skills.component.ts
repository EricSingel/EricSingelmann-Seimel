import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeIn',[
      transition(':leave', [
        style({ opacity: 1 }),
        animate('250ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  i: number = 0;
  txt: string = 'Lorem ipsum dummy text blabla.';
  speed: number = 100;
  viewText: string ='';
  scrollToSkills: boolean = false;
  constructor() { }

  @HostListener('window:scroll') onScroll(e:Event):void {
    if(window.scrollY >= 1099 && !this.scrollToSkills && window.scrollY < 1660){
      this.scrollToSkills = true
      setTimeout(()=> {
        this.typeWriter();
      }, 50)
      console.log(this.scrollToSkills)
    }
    else if (window.scrollY > 1660 && this.scrollToSkills || window.scrollY < 660 && this.scrollToSkills) {
      this.scrollToSkills = false
      console.log(this.scrollToSkills)
    }

    // console.log(window.scrollY)
  }

  ngOnInit(): void {
  }

  typeWriter() {
    this.viewText = '';
    let intval=  setInterval(()=>{
      this.viewText += this.txt.charAt(this.i);
      this.i++;
      // console.log(this.viewText)
      if (this.i == this.txt.length-1) {
        clearInterval(intval)
        this.i=0;
      }  
    },this.speed)

  }

}
