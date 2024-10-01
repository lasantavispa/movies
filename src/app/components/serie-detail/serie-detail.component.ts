import { Component } from '@angular/core';
import { FlixListElementComponent } from '../flix-list-element/flix-list-element.component';
import { RatingFormComponent } from '../rating-form/rating-form.component';
import { ISeries } from '../../pages/series/series.module';
import { ActivatedRoute } from '@angular/router';
import { FlixService } from '../../services/flix.service';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [FlixListElementComponent, RatingFormComponent],
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.scss'
})
export class SerieDetailComponent {
serie: ISeries = {
  id: 0,
  name: '',
  vote_average: 0,
  first_air_date: '',
  poster_path: '',
  overview: '',
}
isModalOpen = false;
ratedSeries: { [id: number]: boolean } = {};


constructor(private route: ActivatedRoute, private flixService: FlixService, private ratingService: RatingService) {}

ngOnInit(): void {
  const serieId = this.route.snapshot.paramMap.get('id');

  if (serieId) {
    this.getSerieDetails(Number(serieId));
  }

  this.ratedSeries = this.ratingService.getRatedItems('serie');

}

getSerieDetails(id: number): void {
  this.flixService.getSeries().subscribe((series: ISeries[]) => {
    this.serie = series.find(s => s.id === id) || {} as ISeries;
  });
}

openModal(): void {
  this.isModalOpen = true;
}

onRatingSubmitted(): void {
  this.ratingService.saveRatedItem('serie', this.serie.id);
  this.ratedSeries[this.serie.id] = true;
  this.isModalOpen = false;
}
}
