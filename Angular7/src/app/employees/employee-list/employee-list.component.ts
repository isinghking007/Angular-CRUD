import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  searchHere:any =''


  addNewItem(value: any) {

    this.newItemEvent.emit(value);

  }
  constructor(public service : EmployeeService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(emp : Employee){
    this.service.formData = Object.assign({},emp);
    this.addNewItem(emp);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record ? ')){
    this.service.deleteEmployee(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted SuccessFully','EMP. Register');
    });
  }
  }
}
