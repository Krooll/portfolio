import { Component } from '@angular/core';
import { TranslateFallbackPipe } from '../../shared/pipes/translate-pipe';
import { NgClass } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal-directive';

export interface AboutMeItem {
  title: string;
  titleFallback: string;
  description: string;
  descriptionFallback: string;
  color: string;
}

@Component({
  selector: 'app-about-me-page',
  imports: [TranslateFallbackPipe, NgClass, ScrollRevealDirective],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.scss',
})
export class AboutMePage {
  protected aboutMeList: AboutMeItem[] = [
    {
      title: 'aboutMePage.aboutMeTitle',
      titleFallback: 'O mnie',
      description: 'aboutMePage.aboutMeDescription',
      descriptionFallback:
        'Jestem Frontend Developerem z 3-letnim doświadczeniem w tworzeniu nowoczesnych i funkcjonalnych aplikacji internetowych. Łączę umiejętności programistyczne z wyczuciem estetyki i dbałością o detale, dzięki czemu tworzę rozwiązania nie tylko wydajne, ale również przyjazne dla użytkowników. Szybko przyswajam nowe technologie i chętnie podejmuję się nowych wyzwań. Programowanie i szeroko pojęta informatyka są moją pasją, dlatego stale rozwijam swoje kompetencje, interesując się również tematyką gamedevu oraz nowymi trendami technologicznymi.',
      color: 'blue',
    },
    {
      title: 'aboutMePage.freeTimeTitle',
      titleFallback: 'Poza kodem',
      description: 'aboutMePage.freeTimeText',
      descriptionFallback: '',
      color: 'pink',
    },
  ];
}
