import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _movieServices: MovieService) { }

  ngOnInit() {
  }

  myList(): string {
    if (this._movieServices.getMyList().length > 0) {
      return 'nav-item active';
    }
    return 'nav-item';
  }
}
