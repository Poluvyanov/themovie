import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieService} from '../../../modules/shared/movie.service';
import {map} from 'rxjs/operators';
import {Imovies} from '../../../modules/shared/interfaces/imovies';
import {ImoviesAll} from '../../../modules/shared/interfaces/imoviesAll';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    private moviesObservable$: Observable<ImoviesAll[]>;

    types = [
        {type: true, label: 'Adult'},
        {type: false, label: 'Not adult'},
    ];

    constructor(private movieService: MovieService) {
    }

    ngOnInit() {
        this.moviesObservable$ = this.movieService.getMovies().pipe(map(res => res.results));

    }

    handleAdult(target) {
        console.log('target', target.value);
    }

}
