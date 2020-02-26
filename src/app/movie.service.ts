import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject , of } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  myList: Movie[] = [];
  myMovieListId = [];
  public _showTrailer = new BehaviorSubject<boolean>(false);

  private url = 'http://localhost:8081/movies';
  private postUrl = 'http://localhost:8081/movie';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  getMyList(): Movie[] {
    return this.myList;
  }
  getMovieListId(): any[] {
    return this.myMovieListId;
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url)
    .pipe(map((res) => res));
  }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post(this.url, movie,  this.httpOptions);
  }

  addToMyList(movie: Movie) {
    this.myList.push(movie);
    this.myMovieListId.push(movie.id);
    console.log(this.myList);
  }

  showTrailer() {
    this._showTrailer.next(true);
  }

}
