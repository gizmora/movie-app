import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filtered: Movie[] = [];
  private filteredList$ = new BehaviorSubject<Movie[]>(null);
  constructor() { }

  filter(searchTerm: string, movieCopy: Movie[]): Observable<Movie[]> {            // this.movieCopy[index].property
    this.filtered = [];                   // reset
    if (searchTerm.length === 0) {
      this.filtered = movieCopy;     // return all movies
    } else {
      for (let i = 0; i < movieCopy.length; i++) {
        if (movieCopy[i].title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          || movieCopy[i].synopsis.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          this.filtered.push(movieCopy[i]);
          console.log('Match ' + movieCopy[i].title);
        } else {
          console.log('No match');
        }
      }
      this.filteredList$.next(this.filtered);
      return this.filteredList$;
    }
  }
}
