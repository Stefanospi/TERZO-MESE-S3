import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PostDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostDetailRoutingModule {}
