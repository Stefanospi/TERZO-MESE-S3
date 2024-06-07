import { Component } from '@angular/core';
import { IMovie } from '../../../Models/i-movie';
import { MovieService } from '../../../Services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrl: './moviedetail.component.scss',
})
export class MoviedetailComponent {
  movie!: IMovie;
  movieId!: number;

  constructor(private route:ActivatedRoute,private movieSvc: MovieService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
      this.getMovieById();
    });

  }

  getMovieById() {
    this.movieSvc.getMovieById(this.movieId).subscribe((movie) => {
      this.movie = movie;
    });
  }
}
