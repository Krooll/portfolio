import { Component } from '@angular/core';
import { TranslateFallbackPipe } from '../../shared/pipes/translate-pipe';
import {ScrollRevealDirective} from '../../shared/directives/scroll-reveal-directive';
import {MatProgressBar} from '@angular/material/progress-bar';

export interface TechnologyItem {
  icon: string;
}

export interface AiItem {
  icon: string;
}

@Component({
  selector: 'app-technology-shell-page',
  imports: [TranslateFallbackPipe, ScrollRevealDirective, MatProgressBar],
  templateUrl: './technology-page.html',
  styleUrl: './technology-page.scss',
})
export class TechnologyPage {

  protected frontEndItems: TechnologyItem[] = [
    {
      icon: '/icons/angular.png',
    },
    {
      icon: '/icons/ts.png',
    },
    {
      icon: '/icons/js.png',
    },
    {
      icon: '/icons/boostrap.png',
    },
    {
      icon: '/icons/html.png',
    },
    {
      icon: '/icons/css.png',
    },
    {
      icon: '/icons/nx.svg',
    },
  ];

  protected backEndItems: TechnologyItem[] = [
    {
      icon: '/icons/java-96.png',
    },
    {
      icon: '/icons/spring-boot-96.png',
    },
    {
      icon: '/icons/postgres.png',
    },
  ];

  protected testItems: TechnologyItem[] = [
    {
      icon: '/icons/jest.svg',
    },
    {
      icon: '/icons/cypress.svg',
    },
    {
      icon: '/icons/npm.png',
    },
    {
      icon: '/icons/keycloak.png',
    },
    {
      icon: '/icons/docker.png',
    },
  ];

  protected viewItems: TechnologyItem[] = [
    {
      icon: '/icons/figma.png',
    },
    {
      icon: '/icons/jira.png',
    },
  ];

  protected aiItems: AiItem[] = [
    {
      icon: '/icons/codex.png',
    },
    {
      icon: '/icons/perplexity.png',
    },
    {
      icon: '/icons/gemini.png',
    },
  ];
}
