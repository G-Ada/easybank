import { Component } from '@angular/core';
import { cards } from './card';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  cards = cards;
}
