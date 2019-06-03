import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './shared/pages/home-page/home-page.component';
import {AppConfig} from './configs/app.config';
import {Error404PageComponent} from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: AppConfig.routes.movies, loadChildren: './modules/movies/movies.module#MoviesModule'},
  {path: AppConfig.routes.error404, component: Error404PageComponent},


  // otherwise redirect to 404
  // {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
