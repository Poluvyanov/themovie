import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListPageComponent} from './pages/movies-list-page/movies-list-page.component';

const moviesRoutes: Routes = [
  {path: '', component: MoviesListPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule {
}
