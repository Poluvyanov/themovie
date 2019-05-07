import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { Page404Component } from './components/page404/page404.component';
import { MaterialModule } from './modules/material/material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [MoviesComponent, Page404Component, HomePageComponent],
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
