import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-child',
  templateUrl: './work-child.component.html',
  styleUrls: ['./work-child.component.css']
})
export class WorkChildComponent implements OnInit {

  @Input() newTitle:string | undefined
  @Input() Details:string |undefined
  constructor() { }

  ngOnInit(): void {
  }

}
