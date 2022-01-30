import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  i: number = 0;
  txt: string = 'Lorem ipsum dummy text blabla.';
  speed: number = 100;
  viewText: any ='';
  constructor() { }

  ngOnInit(): void {
    this.typeWriter()
  }



typeWriter() {
  let intval=  setInterval(()=>{
    this.viewText += this.txt.charAt(this.i);
    this.i++;
    if (this.i == this.txt.length-1) {
      clearInterval(intval)
    }  
  },this.speed)

}

}
