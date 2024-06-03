import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { Routes } from '@angular/router';

const routes: Routes = [{path:'' , component:HomepageComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomepageRoutingModule { }
