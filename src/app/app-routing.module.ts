import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './shared/components/movies/movies.component'
import { Page404Component } from './shared/components/page404/page404.component'

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
