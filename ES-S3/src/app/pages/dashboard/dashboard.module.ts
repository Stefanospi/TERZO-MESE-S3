import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { addMovieComponent } from './addmovie/addmovie.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { UserpageComponent } from './userspage/userpage.component';
import { Page404Component } from './page404/page404.component';
import { FormsModule } from '@angular/forms';
import { PersonalpageComponent } from './personalpage/personalpage.component';



@NgModule({
  declarations: [
    DashboardComponent,
    addMovieComponent,
    MoviedetailComponent,
    UserpageComponent,
    Page404Component,
    PersonalpageComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
