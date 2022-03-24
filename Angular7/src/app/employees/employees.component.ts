import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  
  items = new Employee() ;

  addItem(newItem: any) {
     this.items = newItem;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
