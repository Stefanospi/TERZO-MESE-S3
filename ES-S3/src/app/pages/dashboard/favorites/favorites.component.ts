import { Component,OnInit } from '@angular/core';
import { IMovie } from '../../../Models/i-movie';
import { MovieService } from '../../../Services/movie.service';
import { iUser } from '../../../Models/i-user';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  favMovies!:IMovie[];
  user!:iUser;
  favoriteMovies: IMovie[] = [];

  constructor(private movieSvc:MovieService){}

  ngOnInit(){
    this.movieSvc.FavMovies.subscribe((favs: IMovie[]) => {
      this.favMovies = favs;
    });
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
}


