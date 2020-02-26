import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { FilterService } from '../filter.service';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movies-home-page',
  templateUrl: './movies-home-page.component.html',
  styleUrls: ['./movies-home-page.component.css'],
})
export class MoviesHomePageComponent implements OnInit {

  myMovieList = []; // store id
  movieCopy: Movie[] = [];
  searchTerm: string;
  filteredList$ = new BehaviorSubject<Movie[]>(null);
  isAdded = false;
  clickedMovie: Movie;


  constructor(private _movieService: MovieService,
    private _filterService: FilterService) { }

  ngOnInit() {
    this.getMovies();
    this.myMovieList = this._movieService.getMovieListId();
  }

  getMovies() { // get movie list from db
    this._movieService.getMovies().subscribe(
      (movies) => this.movieCopy = movies
    );
    this._movieService.getMovies().subscribe(
      (movies) => this.filteredList$.next(movies)
    );
  }

  search($event) { // filter movies using search term
    this.searchTerm = $event;
    if (this.searchTerm === '') {
      this.filteredList$.next(this.movieCopy);
    }

    if (this.searchTerm !== '') {
      this._filterService.filter(this.searchTerm, this.movieCopy).subscribe(movies => this.filteredList$.next(movies));
    }
  }

  addToMyList(movie: Movie) {  // add to myList
    if (this.myMovieList.indexOf(movie.id) === -1) {
      this.myMovieList.push(movie.id);
      this._movieService.addToMyList(movie);
    }
    console.log(movie.id + ' ' + this.myMovieList);
    console.log(this.movieCopy);
  }

  isMovieAdded(movieId: number): boolean { // check if movie is added
    if (this.myMovieList.indexOf(movieId) > -1) {
      return !this.isAdded;
    }
    return this.isAdded;
  }

  changeBtnClass(movieId: number): string {
    if (this.myMovieList.indexOf(movieId) > -1) {
      return 'btn btn-success';
    }
    return 'btn btn-info';
  }

  showMovieTrailer(movie: Movie) {
    console.log('Clicked: ' + movie.title);
    this.clickedMovie = movie;
    this._movieService.showTrailer();
  }
}
