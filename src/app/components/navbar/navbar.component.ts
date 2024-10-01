import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  checkWindowSize() {
    this.isMenuOpen = window.innerWidth >= 768;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }
  ngOnInit() {
    this.checkWindowSize();
  }
}
