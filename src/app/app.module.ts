import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ArticlesCardComponent } from './articles-card/articles-card.component';
import { LatestsArticlesSectionComponent } from './latests-articles-section/latests-articles-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EllipsisModule } from 'ngx-ellipsis';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    InfoCardComponent,
    ArticlesCardComponent,
    LatestsArticlesSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EllipsisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
