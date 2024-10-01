import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMovie } from '../pages/movies/movie.model';
import { ISeries } from '../pages/series/series.module';


interface IMovieApiResponse {
  results: IMovie[];
}

interface ISeriesApiResponse {
  results: ISeries[];
}

@Injectable({
  providedIn: 'root'
})

export class FlixService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/now_playing';
  private seriesTopRatedUrl = 'https://api.themoviedb.org/3/tv/top_rated';
  private seriesPopularUrl = 'https://api.themoviedb.org/3/tv/popular';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODk4YTI5MzVmZTNlMDAwMWNlNzhhYzZmMzYwOTY4NSIsIm5iZiI6MTcyNzY4MzAwNS4zNjc3NDMsInN1YiI6IjY2ZjZkOWU5NTRkYTQyNDYxZjcwZDU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5VhJSLU1pLeKn2bS9ACZQOSK9UMtD_BCvPPnRHXFpk'
    })
  }
  constructor(
    private http: HttpClient,
  ) {}



  getMovies(): Observable<IMovie[]> {
  return this.http.get<IMovieApiResponse>(this.apiUrl, this.httpOptions).pipe(
    map(response => response.results.map(movie => ({
      ...movie,
    })))
  );
}

getSeries(): Observable<ISeries[]> {
  return this.http.get<ISeriesApiResponse>(this.seriesPopularUrl, this.httpOptions).pipe(
    map(response => response.results.map(serie => ({
      ...serie,
    })))
  );
}


}
