import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { RatedComponent } from "./pages/rated/rated.component";
import { SeriesComponent } from "./pages/series/series.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MoviesComponent, RatedComponent, SeriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movies';
}
