import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesListPageComponent} from './pages/movies-list-page/movies-list-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MoviesListPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule {
}
