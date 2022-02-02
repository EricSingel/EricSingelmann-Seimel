import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
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
        // query(':leave', [
        //   stagger(100, [
        //     animate('0.5s', style({ opacity: 0 }))
        //   ])
        // ], { optional: true }),
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
  i: number = 0;
  skillsTxt: string[] = [];
  speed: number = 100;
  viewText: string ='';
  scrollToSkills: boolean = false;
  constructor(private renderer: Renderer2) { 
    
  }

  ngOnInit(): void {
  }
  // _event: {"__@InViewportMetadata@12029": { entry: any; }; target: any; visible: any; }
  showLetters( ) {
      this.scrollToSkills = !this.scrollToSkills;
      console.log(this.scrollToSkills)


    if (this.scrollToSkills) {
      this.skillsTxt = [...'Lorem ipsum dummy text blabla.',];
    } else {
      this.skillsTxt = [];
    }
  }

  getAnimationDelay(index: number) {
    return `${100 * index}ms`;
  }

}
