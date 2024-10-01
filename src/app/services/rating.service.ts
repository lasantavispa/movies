import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private ratedMoviesKey = 'ratedMovies';
  private ratedSeriesKey = 'ratedSeries';


  getRatedItems(type: 'movie' | 'serie'): { [id: number]: boolean } {
    const key = type === 'movie' ? this.ratedMoviesKey : this.ratedSeriesKey;
    const storedRatedItems = localStorage.getItem(key);
    return storedRatedItems ? JSON.parse(storedRatedItems) : {};
  }

  saveRatedItem(type: 'movie' | 'serie', id: number): void {
    const key = type === 'movie' ? this.ratedMoviesKey : this.ratedSeriesKey;
    const ratedItems = this.getRatedItems(type);
    ratedItems[id] = true;
    localStorage.setItem(key, JSON.stringify(ratedItems));
  }
}
