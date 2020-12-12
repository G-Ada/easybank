import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.scss']
})
export class ArticlesCardComponent{
  @Input() image: string;
  @Input() author: string;
  @Input() title: string;
  @Input() body: string;
  
}
