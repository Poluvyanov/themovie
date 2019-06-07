import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesListPageComponent} from './pages/movies-list-page/movies-list-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    MoviesListPageComponent,
    MovieDetailPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MoviesModule {
}
