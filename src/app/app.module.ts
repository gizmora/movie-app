import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HighlightSearchPipe } from './highlight-search.pipe';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { MoviesHomePageComponent } from './movies-home-page/movies-home-page.component';
import { MyListComponent } from './my-list/my-list.component';
import { SearchComponent } from './search/search.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrailerComponent } from './trailer/trailer.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesHomePageComponent,
    SearchComponent,
    AboutComponent,
    MovieListComponent,
    MyListComponent,
    HeaderComponent,
    HighlightSearchPipe,
    MoviePreviewComponent,
    TrailerComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
