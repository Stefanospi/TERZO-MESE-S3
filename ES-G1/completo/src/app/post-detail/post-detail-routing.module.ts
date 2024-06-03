import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail.component';

const routes: Routes = [
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PostDetailRoutingModule {}
