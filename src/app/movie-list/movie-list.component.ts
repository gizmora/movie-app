import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private _movieService: MovieService ) { }

  ngOnInit() {
  }


  private getMovies() {
    this._movieService.getMovies()
    .subscribe(
     // res => this. = res,
     // err => console.error(err.status)
    );

  }

}
