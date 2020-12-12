import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuCloseImageUrl = '.././assets/icon-close.svg';
  menuOpenImageUrl = '.././assets/icon-hamburger.svg';
  menuImageUrl = this.menuOpenImageUrl;
  isOpen = false;
  currentWindowWidth: number = NaN;

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
    if (this.currentWindowWidth < 1050) {
      this.isOpen = false;
    } else if (this.currentWindowWidth >= 1050) {
      this.isOpen = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
    if (this.currentWindowWidth >= 1050) {
      this.isOpen = true;
    }
  }

  openCloseMenu(): void {
    if (this.currentWindowWidth >= 1050) {
      this.isOpen = true;
    } else if (this.currentWindowWidth < 1050) {
      if (this.isOpen) {
        this.menuImageUrl = this.menuOpenImageUrl;
        this.isOpen = false;
      } else {
        this.menuImageUrl = this.menuCloseImageUrl;
        this.isOpen = true;
      }
    }
    
  }

}
