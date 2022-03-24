import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { WorkDetailsComponent } from './work-details/work-details.component';

const routes: Routes = [
    {
        path:'employees',component:EmployeesComponent,
         children:[{ path:'employee',component:EmployeeComponent }]
    },
   
    {
        path:'work',component:WorkDetailsComponent
    }
    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }