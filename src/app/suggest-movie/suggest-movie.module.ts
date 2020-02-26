import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestMovieComponent } from './suggest-movie.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SuggestMovieComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuggestMovieComponent]
})
export class SuggestMovieModule { }
