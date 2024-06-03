import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const routes: Routes = [{path:'' , component:HomepageComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
