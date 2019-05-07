import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Page404Component} from './shared/components/page404/page404.component';
import {HomePageComponent} from './shared/pages/home-page/home-page.component';
import {AppConfig} from './config/app.config';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: AppConfig.routes.movies, loadChildren: './modules/movies/movies.module#MoviesModule'},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
