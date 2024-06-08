import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../Models/i-user';
import { IMovie } from '../../Models/i-movie';
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isLoggedIn: boolean = false;
  user!: iUser;
  moviesList!: IMovie[];
  favMovies!: IMovie[];
  favoriteMovies: IMovie[] = [];

  constructor(private authSvc: AuthService, private movieSvc: MovieService) {}

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe(
      (isLoggedIn) => (this.isLoggedIn = isLoggedIn)
    );
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
    return this.favoriteMovies.some((favMovie) => favMovie.id === movie.id);
  }
}
