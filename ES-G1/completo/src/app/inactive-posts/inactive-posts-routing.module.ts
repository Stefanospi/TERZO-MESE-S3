import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostsComponent } from './inactive-posts.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inactive', component: InactivePostsComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class InactivePostsRoutingModule {}
