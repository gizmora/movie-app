import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _movieService: MovieService, private router: Router) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._movieService.getMyList().length > 0) {
      return true;
    }
    this.router.navigateByUrl('');
    alert('You haven\'t added anything to your list yet.');
    return false;
  }
}
