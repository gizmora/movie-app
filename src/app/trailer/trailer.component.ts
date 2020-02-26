import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../movie.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../movie';
@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit, AfterViewInit {
  @Input() movieData;
  public showObsrvr$ = new Observable<boolean>();
  movie = this.movieData;
  constructor(
    public sanitizer: DomSanitizer,
    private movieService: MovieService
    ) { }

  ngOnInit() {
    this.showObsrvr$ = this.movieService._showTrailer;
  }
  ngAfterViewInit() {
  }


  closeNav() {
    console.log('closed ' + this.movieData.title);
    this.movieService._showTrailer.next(false);
  }
}
