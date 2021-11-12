import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employeeInfo'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  baseUrl = environment.getUrl;



  constructor(private http: HttpClient) { }


  getEmployee(): Observable<any> {

    return this.http.get<any>(this.baseUrl)
  }

  postData(employee: Employee) {
    return this.http.post<any>(this.baseUrl + 'addemp', employee)
  }


  deleteData(n: number) {
    return this.http.delete<any>(this.baseUrl + "delete/" + n)
  }
}
