import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { RatedComponent } from './pages/rated/rated.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';

export const routes: Routes = [
  {
    path: 'movies',
    title: 'Movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    title: 'Series',
    component: SeriesComponent,
  },
  {
    path: 'rated',
    title: 'Rated',
    component: RatedComponent,
  },
  {
    path: '',
    title: 'App Home Component',
    component: HomeComponent,
  },
  {
    path: 'movies/:id',
    title: 'Movie Detail',
    component: MovieDetailComponent,
  },

  {
    path: 'series/:id',
    title: 'Series Detail',
    component: SerieDetailComponent,
  },
];
