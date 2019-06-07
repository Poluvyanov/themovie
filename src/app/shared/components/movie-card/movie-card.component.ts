import {Component, OnInit, Input, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../../../configs/app.config';
import {MovieService} from '../../../modules/shared/movie.service';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 1, delay: 0}
    }))])
  ]
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
