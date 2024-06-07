import { Component } from '@angular/core';
import { IMovie } from '../../../Models/i-movie';
import { MovieService } from '../../../Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mymovie',
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss'
})
export class addMovieComponent {
  newMovie:Partial<IMovie> = {
    title: '',
    duration: 0,
    image: '',
    description: '',
    rating: 0,
  }
  movies!: IMovie[];

  constructor(private movieSvc:MovieService, private router:Router){}

  ngOnInit(){
    this.movieSvc.getAllMovies().subscribe((movie) => {
      this.movies = movie;
      this.router.navigate(['moviedetail/:id'])
    })
  }

  createMovieAndLoad(){
    this.movieSvc.create(this.newMovie).subscribe(() => {
      this.movieSvc.getAllMovies().subscribe((movie) =>{
        this.movies = movie;
        console.log(this.movies);
      })
    })
  }
}
