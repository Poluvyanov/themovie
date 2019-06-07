import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './modules/material.module';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {AppModule} from '../app.module';
import {RoundNumber} from './pipes/round-number.pipe';
import {MovieCardDetailComponent} from './components/movie-card-detail/movie-card-detail.component';


@NgModule({
    declarations: [
        HomePageComponent,
        Error404PageComponent,
        MovieCardComponent,
        RoundNumber,
        MovieCardDetailComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
    ],
    exports: [
        MaterialModule,
        MovieCardComponent,
        MovieCardDetailComponent
    ]
})
export class SharedModule {
}
