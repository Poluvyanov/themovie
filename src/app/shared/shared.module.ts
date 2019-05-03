import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [MoviesComponent, Page404Component],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
