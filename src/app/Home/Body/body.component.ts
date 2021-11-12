import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../Services/backend-api.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public employee: any[] = []
  constructor(private _emp: BackendApiService) { }

  ngOnInit(): void {
    this.getEmployeInfo();
  }

  getEmployeInfo() {
    this._emp.getEmployee().subscribe(
      data => { this.employee = data.data }
    );

  }
  onDelete(id: number) {
    this._emp.deleteData(id).subscribe(data => {
      this.ngOnInit();
    });


  }

}
