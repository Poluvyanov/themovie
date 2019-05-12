import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {MovieService} from '../../../modules/movies/shared/movie.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

    // movies$: Observable<any[]>;
    public movies$;

    constructor(private movieService: MovieService) {
    }

    ngOnInit() {
        this.movies$ = this.movieService.getMovies().subscribe((res: any[]) => {
            console.log('res', res);
        });
    }

}
