import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../configs/app.config';

@Injectable({
    providedIn: 'root'
})

export class MovieService {


    constructor(private http: HttpClient) {
    }

    getMovies(): Observable<any> {
        return this.http.get(AppConfig.serverUrl + '/popular?api_key=' + AppConfig.apiKey + '&language=en-US&page=1');
    }

    getMoviesById(id: string): any {
        return this.http.get(AppConfig.serverUrl + '/' + id + '?api_key=' + AppConfig.apiKey + '&language=en-US');
    }
}
