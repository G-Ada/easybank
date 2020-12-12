import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  backgroundImageMobile = "../../assets/bg-intro-mobile.svg";
  backgroundImageDesktop = "../../assets/bg-intro-desktop.svg";
  backgroundImageUrl: string;
  currentWindowWidth: number = NaN;

  @HostListener('window:resize')
  onResize() {
    this.setBackgroundImage();
  }

  constructor() { }

  ngOnInit(): void {
    this.setBackgroundImage();
  }

  setBackgroundImage(): void {
    this.currentWindowWidth = window.innerWidth
    if (this.currentWindowWidth < 1050) {
      this.backgroundImageUrl = this.backgroundImageMobile;
    } else if (this.currentWindowWidth >= 1050) {
      this.backgroundImageUrl = this.backgroundImageDesktop;
    }
  }

}
