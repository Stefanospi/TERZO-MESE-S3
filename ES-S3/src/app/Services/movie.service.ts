import { Injectable } from '@angular/core';
import { IMovie } from '../Models/i-movie';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl: string = 'http://localhost:3000/movies-popular';
  favMovie: IMovie[] = [];
  private favMovieSubject: BehaviorSubject<IMovie[]> = new BehaviorSubject<IMovie[]>([]);

  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.loadFavFromLocalStorage(user.id);
      } else {
        this.favMovie = [];
      }
    });
  }
  getAllMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.apiUrl);
  }
  getMovieById(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.apiUrl}/${id}`);
  }
  create(newMovie: Partial<IMovie>): Observable<IMovie> {
    return this.http.post<IMovie>(this.apiUrl, newMovie);
  }
  edit(movie: IMovie): Observable<IMovie> {
    return this.http.put<IMovie>(`${this.apiUrl}/${movie.id}`, movie);
  }
  delete(id: number): Observable<IMovie> {
    return this.http.delete<IMovie>(`${this.apiUrl}/${id}`);
  }
  addToFav(movie: IMovie) {
    const user = this.authSvc.subscribeUser.value;
    if (user) {
      const existingMovie = this.favMovie.find((mov) => mov.id === movie.id);
      if (!existingMovie) {
        this.favMovie.push(movie);
        this.saveFavToLocalStorage(user.id);
      }
    }
  }

   loadFavFromLocalStorage(userId: number) {
    const favFromStorage = localStorage.getItem(`favMovies_${userId}`);
    if (favFromStorage) {
      this.favMovie = JSON.parse(favFromStorage);
      this.favMovieSubject.next(this.favMovie);
    } else {
      this.favMovie = [];
      this.favMovieSubject.next([]);
    }
  }

   saveFavToLocalStorage(userId: number) {
    localStorage.setItem(`favMovies_${userId}`, JSON.stringify(this.favMovie));
  }

  get FavMovies(): Observable<IMovie[]> {
    return this.favMovieSubject.asObservable();
  }

  addFavMovie(movie: IMovie, userId: number) {
    this.favMovie.push(movie);
    this.saveFavToLocalStorage(userId);
    this.favMovieSubject.next(this.favMovie);
  }

  removeFavMovie(movieId: number, userId: number) {
    this.favMovie = this.favMovie.filter(movie => movie.id !== movieId);
    this.saveFavToLocalStorage(userId);
    this.favMovieSubject.next(this.favMovie);
  }

}
