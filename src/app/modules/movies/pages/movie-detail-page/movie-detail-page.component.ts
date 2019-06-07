import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../shared/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-movie-detail-page',
    templateUrl: './movie-detail-page.component.html',
    styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

    movie: any;

    constructor(
        private movieService: MovieService,
        private activateRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        const movieId = this.activateRoute.snapshot.paramMap.get('id');
        console.log('movieId', movieId);
        this.movieService.getMoviesById(movieId).subscribe(res => this.movie = res);
    }

}
