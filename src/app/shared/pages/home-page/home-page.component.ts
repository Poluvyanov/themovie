import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieService} from '../../../modules/shared/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies: any;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.results;
    });
  }

}
