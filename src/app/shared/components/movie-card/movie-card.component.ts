import {Component, OnInit, Input, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../../../configs/app.config';
import {MovieService} from '../../../modules/shared/movie.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie;

  constructor(
    private movieService: MovieService,
    @Inject(APP_CONFIG) public appConfig: any
  ) {
  }

  ngOnInit() {
  }

}
