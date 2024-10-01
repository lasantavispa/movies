import { Component, OnInit } from '@angular/core';
import { FlixListElementComponent } from '../flix-list-element/flix-list-element.component';
import { RatingFormComponent } from '../rating-form/rating-form.component';
import { FlixService } from '../../services/flix.service';
import { IMovie } from '../../pages/movies/movie.model';
import { ActivatedRoute } from '@angular/router';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [FlixListElementComponent, RatingFormComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent implements OnInit {
  movie: IMovie = {
    id: 0,
    title: '',
    vote_average: 0,
    release_date: '',
    poster_path: '',
    overview: '',
  };

  isModalOpen = false;
  ratedMovies: { [id: number]: boolean } = {};

  constructor(
    private route: ActivatedRoute,
    private flixService: FlixService,
    private ratingService: RatingService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {
      this.getMovieDetails(Number(movieId));
    }
    this.ratedMovies = this.ratingService.getRatedItems('movie');
  }

  getMovieDetails(id: number): void {
    this.flixService.getMovies().subscribe((movies: IMovie[]) => {
      this.movie = movies.find((m) => m.id === id) || ({} as IMovie);
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  onRatingSubmitted(): void {
    this.ratingService.saveRatedItem('movie', this.movie.id);
    this.ratedMovies[this.movie.id] = true;
    this.isModalOpen = false;
  }
}
