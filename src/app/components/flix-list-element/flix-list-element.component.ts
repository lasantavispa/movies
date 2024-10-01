import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flix-list-element',
  standalone: true,
  imports: [],
  templateUrl: './flix-list-element.component.html',
  styleUrl: './flix-list-element.component.scss'
})
export class FlixListElementComponent {
  constructor( private router: Router) {}

  @Input() title!: string;
  @Input() average!: number;
  @Input() minutes!: string;
  @Input() date!: string;
  @Input() image!: string;
  @Input() id!: number;
  @Input() type!: 'movie' | 'series';
  @Input() isRated!: boolean;

  goToDetail(id: number): void {
    const path = this.type === 'movie' ? 'movies' : 'series';
    this.router.navigate([`/${path}`, id]);
  }
}
