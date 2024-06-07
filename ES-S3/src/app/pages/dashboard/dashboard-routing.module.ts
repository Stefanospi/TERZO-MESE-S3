import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { addMovieComponent } from './addmovie/addmovie.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { UserpageComponent } from './userspage/userpage.component';
import { PersonalpageComponent } from './personalpage/personalpage.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'addmovie', component: addMovieComponent },
  { path: 'moviedetail/:id', component: MoviedetailComponent },
  { path: 'userpage', component: UserpageComponent },
  { path: 'personalpage', component: PersonalpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
