import { Component, OnInit, AfterContentInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-suggest-movie',
  templateUrl: './suggest-movie.component.html',
  styleUrls: ['./suggest-movie.component.css']
})
export class SuggestMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  newMovie: Movie;
  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
  }

  addMovie(movie: any): void {
    this.movieService.addMovie(this.newMovie = {
      id: 0,
      title: movie.value.title,
      suggested_by: movie.value.suggested_by,
      email: movie.value.email,
      synopsis: movie.value.synopsis,
      cover_url: movie.value.img_url,
      trailer: movie.value.trailer
    }).subscribe();
    console.log(this.newMovie);
  }
}
