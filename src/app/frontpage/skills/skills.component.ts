import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
import { InViewportMetadata } from 'ng-in-viewport';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('spanAnimation', [
      transition('* => *', [ // each time the binding value changes
      //   query(':leave', [
      //     stagger(100, [
      //       animate('50ms', style({ opacity: 0 }))
      //     ])
      //   ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skillsTxt: string = 'I learned a bunch of skills in the developer academy so i listed them here in an grid.';
  htmlTxt: string[] = [];
  cssTxt: string[] = [];
  jsTxt: string[] = [];
  angularTxt: string[] = [];
  scrollToSkills: boolean = true;
  matchMedia: any = window.matchMedia('(max-width: 1000px)')
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  loadTxt() {
      this.scrollToSkills = !this.scrollToSkills;
      console.log(this.scrollToSkills)
      console.log(this.matchMedia)

    if (this.scrollToSkills && !this.matchMedia.matches) {
      setTimeout(()=>{
        this.htmlTxt = [...'HTML',];
      },300)
      setTimeout(()=>{
        this.cssTxt = [...'CSS',];
      },600)
      setTimeout(()=>{
        this.jsTxt = [...'Javascript',];
      },900)
      setTimeout(()=>{
        this.angularTxt = [...'Angular',];
      },1200)

    } 
    else if(this.matchMedia.matches){
      this.fullTxt();
    }
    else{
      this.htmlTxt = []
      this.cssTxt = []
      this.jsTxt = []
      this.angularTxt = []
    }
  }

  fullTxt(){
    return (
      this.htmlTxt = [...'HTML',],
      this.cssTxt = [...'CSS',],
      this.jsTxt = [...'Javascript',],
      this.angularTxt = [...'Angular',]
    )
  }

}
