import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', //verifico che sia effettivamente la home
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path:'active', loadChildren:() => import('./active-posts/active-posts.module').then((m) => m.ActivePostsModule),
  },
  {
    path:'inactive', loadChildren:() => import('./inactive-posts/inactive-posts.module').then((m) => m.InactivePostsModule),
  },
  {
    path:'post/:id', loadChildren:() => import('./post-detail/post-detail.module').then((m) => m.PostDetailModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
