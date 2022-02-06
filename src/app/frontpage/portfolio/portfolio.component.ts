import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showProject(name:string){
    window.open(`http://${name}.eric-singelmann-seimel.de/`,'_blank')
  }

}
