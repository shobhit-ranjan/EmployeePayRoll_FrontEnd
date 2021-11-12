import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './Home/Addemp/addemp.component';
import { DashBoardComponent } from './Home/DashBoard/dash-board.component';

const routes: Routes = [
  { path: "", component: DashBoardComponent },
  { path: "employeesforms", component: AddempComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
