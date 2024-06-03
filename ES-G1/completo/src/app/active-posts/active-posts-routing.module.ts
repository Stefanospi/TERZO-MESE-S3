import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from './active-posts.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: ActivePostsComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ActivePostsRoutingModule {}
