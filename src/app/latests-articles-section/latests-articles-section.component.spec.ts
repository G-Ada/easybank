import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestsArticlesSectionComponent } from './latests-articles-section.component';

describe('LatestsArticlesSectionComponent', () => {
  let component: LatestsArticlesSectionComponent;
  let fixture: ComponentFixture<LatestsArticlesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestsArticlesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestsArticlesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
