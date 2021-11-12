import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from 'src/app/Services/backend-api.service';
import { Employee } from '../../Model/employeeInfo'
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {



  constructor(private _emp: BackendApiService, private routerlink: Router) { }

  ngOnInit(): void {
  }

  emp: Employee = {

    name: '',
    salary: 0,
    gender: '',
    startDate: '',
    profilePic: '',
    note: '',
    departments: []
  }

  departmentChange(num: number) {
    this.departmentList = this.departmentList.map(no => {
      if (no.id == num) {
        no.selecteddep = !no.selecteddep;
      }
      return no;
    })
  }


  departmentList = [
    { id: 1, value: "HR", selecteddep: false },
    { id: 2, value: "Sales", selecteddep: false },
    { id: 3, value: "Finance", selecteddep: false },
    { id: 4, value: "Engineer", selecteddep: false },
    { id: 5, value: "Others", selecteddep: false },
  ]

  onsumbit(n: any) {
    console.log(n.value);
    this.emp.name = n.value.name;
    this.emp.gender = n.value.gender;
    this.emp.salary = n.value.salary;
    this.emp.note = n.value.note;
    this.emp.profilePic = n.value.profilePic;
    this.emp.startDate = n.value.day + ' ' + n.value.month + ' ' + n.value.year;

    for (let id of this.departmentList) {
      if (id.selecteddep) {
        this.emp.departments.push(id.value);
      }
    }

    this._emp.postData(this.emp).subscribe((data) =>
      console.log(data))
    this.routerlink.navigate(["/"])

  }

  onChange(name: any) {


  }

  salary = [
    "560004", "230532", "226001", "834001", "248001",
  ]

  day =
    [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"
    ]

  months =
    [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "ANG", "SEP", "OCT", "NOV", "DEC"
    ]

  years =
    [
      "2020", "2019", "2018", "2017", "2016", "2015"
    ]

}
