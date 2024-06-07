import { Component } from '@angular/core';
import { iUser } from '../../Models/i-user';
import { AuthService } from '../../auth/auth.service';
import { IMovie } from '../../Models/i-movie';
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  user!: iUser;
  moviesList!: IMovie[];

  constructor(private authSvc: AuthService, private movieSvc:MovieService) {}

  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      if (user) this.user = user;
    });

    this.movieSvc.getAllMovies().subscribe((movie) => {
      this.moviesList = movie;
      console.log(this.moviesList);
    });
  }
}
