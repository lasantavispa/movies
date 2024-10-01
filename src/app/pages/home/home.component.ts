import { Component } from '@angular/core';
import { RatedComponent } from "../rated/rated.component";
import { MoviesComponent } from "../movies/movies.component";
import { SeriesComponent } from "../series/series.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RatedComponent, MoviesComponent, SeriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
