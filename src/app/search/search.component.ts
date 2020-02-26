import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public searchEvent: EventEmitter<any> = new EventEmitter();


  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) { }

  search(term: string) {
    this.searchTerms.next(term);
    // console.log(term);
  }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(1000)).subscribe(
      (term: string) => this.searchEvent.emit(term)// this.filter(term)
    );
  }

  /*
    childEvent(){
      this.childEvent.emit("");
    }
   */
}
