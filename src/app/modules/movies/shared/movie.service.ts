import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../config/app.config';
import {Observable, of} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private moviesCollection;

    constructor(private httpClient: HttpClient) {
    }


    getMovies(): Observable<any[]> {
        const data = {
            api_key: '',
            language: 'en-US',
            page: 1
        };

        return this.httpClient.get(AppConfig.server + '/movie/popular?api_key=ef2532cf610dd88592daa5a4c08b66c7&language=en-US&page=1');
    }
}

// https://api.themoviedb.org/3/movie/popular?api_key=ef2532cf610dd88592daa5a4c08b66c7&language=en-US&page=1