import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.scss'
})
export class RatingFormComponent {
   @Input() isModalOpen: boolean = false;
   @Output() modalClosed = new EventEmitter<void>();
   @Output() ratingSubmitted = new EventEmitter<void>();


   closeModal() {
    this.isModalOpen = false;
    this.modalClosed.emit();
   }

   submitRating(event:Event): void {
    event.preventDefault();
    this.ratingSubmitted.emit();
    this.closeModal();

   }
 }

