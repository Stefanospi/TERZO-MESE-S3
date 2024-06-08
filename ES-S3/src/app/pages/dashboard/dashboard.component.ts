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
  favMovies!: IMovie[];
  favoriteMovies: IMovie[] = [];

  constructor(private authSvc: AuthService, private movieSvc:MovieService) {}


  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.loadFavoriteMovies(user.id);
      }
    });

    this.movieSvc.getAllMovies().subscribe((movies) => {
      this.moviesList = movies;
      console.log(this.moviesList);
    });
  }

  addToFavorite(movie: IMovie) {
    if (this.user) {
      this.movieSvc.addFavMovie(movie, this.user.id);
      this.loadFavoriteMovies(this.user.id); // Refresh the favorite movies list
    } else {
      console.error('User is not authenticated.');
    }
  }

  removeFromFavorite(movieId: number) {
    if (this.user) {
      this.movieSvc.removeFavMovie(movieId, this.user.id);
      this.loadFavoriteMovies(this.user.id); // Refresh the favorite movies list
    } else {
      console.error('User is not authenticated.');
    }
  }

  loadFavoriteMovies(userId: number) {
    this.movieSvc.loadFavFromLocalStorage(userId);
    this.movieSvc.FavMovies.subscribe((favMovies) => {
      this.favoriteMovies = favMovies;
    });
  }

  isFavorite(movie: IMovie): boolean {
    return this.favoriteMovies.some(favMovie => favMovie.id === movie.id);
  }
}
