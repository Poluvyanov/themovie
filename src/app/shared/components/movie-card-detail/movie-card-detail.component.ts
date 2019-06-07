import {Component, Inject, Input, OnInit} from '@angular/core';
import {MovieService} from '../../../modules/shared/movie.service';
import {APP_CONFIG} from '../../../configs/app.config';
import {Location} from '@angular/common';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
    selector: 'app-movie-card-detail',
    templateUrl: './movie-card-detail.component.html',
    styleUrls: ['./movie-card-detail.component.css'],
    animations: [
        trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
            params: {timing: 1, delay: 0}
        }))])
    ]
})
export class MovieCardDetailComponent implements OnInit {

    @Input() movie: any;

    constructor(
        @Inject(APP_CONFIG) public appConfig: any,
        private location: Location
    ) {
    }

    ngOnInit() {
    }

    goBack(): void {
        this.location.back();
    }
}
