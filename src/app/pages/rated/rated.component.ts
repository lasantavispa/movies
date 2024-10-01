import { Component } from '@angular/core';
import { IMovie } from '../movies/movie.model';
import { FlixService } from '../../services/flix.service';
import { RatingService } from '../../services/rating.service';
import { FlixListElementComponent } from '../../components/flix-list-element/flix-list-element.component';
import { ISeries } from '../series/series.module';

@Component({
  selector: 'app-rated',
  standalone: true,
  imports: [FlixListElementComponent],
  templateUrl: './rated.component.html',
  styleUrl: './rated.component.scss',
})
export class RatedComponent {
  ratedMovies: IMovie[] = [];
  ratedSeries: ISeries[] = [];

  constructor(
    private flixService: FlixService,
    private ratingService: RatingService
  ) {}

  ngOnInit(): void {
    const ratedMoviesIds = Object.keys(
      this.ratingService.getRatedItems('movie')
    ).map(Number);
    const ratedSeriesIds = Object.keys(
      this.ratingService.getRatedItems('serie')
    ).map(Number);

    this.getRatedMoviesDetails(ratedMoviesIds);
    this.getRatedSeriesDetails(ratedSeriesIds);
  }

  getRatedMoviesDetails(ratedMovieIds: number[]): void {
    this.flixService.getMovies().subscribe((movies: IMovie[]) => {
      this.ratedMovies = movies.filter((movie) =>
        ratedMovieIds.includes(movie.id)
      );
    });
  }

  getRatedSeriesDetails(ratedSeriesIds: number[]): void {
    this.flixService.getSeries().subscribe((series: ISeries[]) => {
      this.ratedSeries = series.filter((serie) =>
        ratedSeriesIds.includes(serie.id)
      );
    });
  }

  getImageUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }

  scrollLeft(containerClass: string) {
    const scrollable = document.querySelector(`.${containerClass}`) as HTMLElement;
    if (scrollable) {
      const flixElementWidth = scrollable.querySelector('.section__flix')?.clientWidth || 200;
      scrollable.scrollBy({
        top: 0,
        left: -flixElementWidth - 20,
      });
    }
  }

  scrollRight(containerClass: string) {
    const scrollable = document.querySelector(`.${containerClass}`) as HTMLElement;
    if (scrollable) {
      const flixElementWidth = scrollable.querySelector('.section__flix')?.clientWidth || 200;
      scrollable.scrollBy({
        top: 0,
        left: flixElementWidth + 20,
        behavior: 'smooth',
      });
    }
  }


}
