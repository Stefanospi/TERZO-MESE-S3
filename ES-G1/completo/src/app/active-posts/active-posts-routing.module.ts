import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from './active-posts.component';
import { Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'active',
    component: ActivePostsComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ActivePostsRoutingModule {}
