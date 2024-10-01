import { Component } from '@angular/core';
import { ISeries } from './series.module';
import { FlixService } from '../../services/flix.service';
import { catchError, EMPTY } from 'rxjs';
import { FlixListElementComponent } from '../../components/flix-list-element/flix-list-element.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [FlixListElementComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {
  series!: ISeries [] | [] ;
  constructor(private flixService: FlixService) {}
  public errorMessage!: string;

  ngOnInit(): void {
    this.flixService.getSeries()
      .pipe(
        catchError((error) => {
          this.errorMessage = "An error occurred while fetching the movies.";
          console.error(error);
          return EMPTY;
        })
      )
      .subscribe((series: ISeries[]) => {
        this.series = series;
        console.log(this.series);
      });
  }

}
