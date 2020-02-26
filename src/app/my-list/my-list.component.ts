import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})

export class MyListComponent implements OnInit {

  constructor(private _movieService: MovieService) { }
  movieList: Movie[] = [];
  clickedMovie: Movie;

  ngOnInit() {
    this.movieList = this._movieService.getMyList();
  }

  isActive($event, movieId: number) {
    if ($event.type === 'mouseover') {
      $event.target.className = 'nav-link active';
    } if ($event.type === 'mouseleave') {
      $event.target.className = 'nav-link';
    }
  }

  showMoviePreview(movie: Movie) {
    console.log('Clicked');
    this.clickedMovie = movie;
  }

}
