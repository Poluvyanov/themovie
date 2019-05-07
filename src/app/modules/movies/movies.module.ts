import { NgModule } from '@angular/core';
import { MoviesListPageComponent } from './pages/movies-list-page/movies-list-page.component';
import {MoviesRoutingModule} from './movies-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    MoviesListPageComponent
  ],
  imports: [
    SharedModule,
    MoviesRoutingModule,

  ]
})
export class MoviesModule { }
