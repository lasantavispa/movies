import { Component, inject, OnInit } from '@angular/core';
import { FlixService } from '../../services/flix.service';
import { FlixListElementComponent } from "../../components/flix-list-element/flix-list-element.component";
import { IMovie } from './movie.model';
import { catchError, EMPTY } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FlixListElementComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit  {
  movies!: IMovie[] | [];
  ratedMovies: { [id: number]: boolean } = {};
  constructor(private flixService: FlixService, private router: Router) {}
  public errorMessage!: string;


  goToDetail(movieId: number): void {
    this.router.navigate([`/movies`, movieId]);
  }

  ngOnInit(): void {
    this.flixService.getMovies()
      .pipe(
        catchError((error) => {
          this.errorMessage = "An error occurred while fetching the movies.";
          console.error(error);
          return EMPTY;
        })
      )
      .subscribe((movies: IMovie[]) => {
        this.movies = movies;
        console.log(this.movies);
      });

      const storedRatedMovies = localStorage.getItem('ratedMovies');
      if (storedRatedMovies) {
        this.ratedMovies = JSON.parse(storedRatedMovies);
      }
  }
  trackByMovieId(index: number, movie: IMovie): number {
    return movie.id;
  }
}


