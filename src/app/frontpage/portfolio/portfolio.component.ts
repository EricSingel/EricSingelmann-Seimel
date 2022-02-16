import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewChecked(){
  //   this.scrollBack();
  // }

  showProject(name:string){
    window.open(`http://${name}.eric-singelmann-seimel.de/`,'_blank')
  }

  // scrollBack() {
  //   window.scrollTo(window.scrollX, window.scrollY - 100);
  //   // console.log(event)
  //   console.log('hi')
  // };

}
