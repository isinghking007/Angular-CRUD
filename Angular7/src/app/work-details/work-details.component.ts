import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

  nameArray=['Developer','Tester','Security','Support'];
  work=[" I'm a Developer "," I'm a Tester ","I'm a Security","I'm a Support"]
  constructor() { }

  ngOnInit(): void {
  }
  options:any;
  curr_work:any;
  title:any;
  public onClick(value : any){
    switch(value){
      case 'Developer':
        this.options=0;
        this.curr_work=this.work[this.options];
        break;
        case 'Tester':
        this.options=1;
        this.curr_work=this.work[this.options];
        break;
        case 'Security':
        this.options=2;
        this.curr_work=this.work[this.options];
        break;
        case 'Support':
        this.options=3;
        this.curr_work=this.work[this.options];
        break;
    }
  }

}
