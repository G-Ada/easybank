import { Component, OnInit } from '@angular/core';
import { articles } from './articles';

@Component({
  selector: 'app-latests-articles-section',
  templateUrl: './latests-articles-section.component.html',
  styleUrls: ['./latests-articles-section.component.scss']
})
export class LatestsArticlesSectionComponent implements OnInit {
  articles = articles;
  
  constructor() { }

  ngOnInit(): void {
  }

}
