import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
      setTimeout(()=>{
        this.route.navigate([''])
      },2000)
  }

}
