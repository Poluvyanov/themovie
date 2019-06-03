import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    movies: 'movies',
    error404: '404'
  },
  serverUrl: 'https://api.themoviedb.org/3/movie',
  apiKey: 'ef2532cf610dd88592daa5a4c08b66c7'

};
