import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuggestMovieComponent } from './suggest-movie/suggest-movie.component';
import { MoviesHomePageComponent } from './movies-home-page/movies-home-page.component';
import { AboutComponent} from './about/about.component';
import { MyListComponent } from './my-list/my-list.component';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [
  {path: '', component: MoviesHomePageComponent},
  {path: 'suggest-movie', loadChildren: './suggest-movie/suggest-movie.module#SuggestMovieModule'},
  {path: 'about', component: AboutComponent},
  {path: 'my-list', component: MyListComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
