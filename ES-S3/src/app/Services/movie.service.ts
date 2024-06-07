import { Injectable } from '@angular/core';
import { IMovie } from '../Models/i-movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = 'http://localhost:3000/movies-popular'


  constructor(private http:HttpClient) {}
  getAllMovies():Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.apiUrl)
  }
  getMovieById(id:number):Observable<IMovie>{
    return this.http.get<IMovie>(`${this.apiUrl}/${id}`)
  }
  create(newMovie:Partial<IMovie>):Observable<IMovie>{
    return this.http.post<IMovie>(this.apiUrl, newMovie)
  }
  edit(movie:IMovie):Observable<IMovie>{
    return this.http.put<IMovie>(`${this.apiUrl}/${movie.id}`, movie)
  }
  delete(id:number):Observable<IMovie>{
    return this.http.delete<IMovie>(`${this.apiUrl}/${id}`)
  }

}
