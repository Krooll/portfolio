import {Component} from '@angular/core';
import {TranslateFallbackPipe} from "../../shared/pipes/translate-pipe";

export interface TechnologyItem {
  icon: string;
}

export interface AiItem {
  icon: string;
}

@Component({
  selector: 'app-technology-shell-page',
  imports: [
    TranslateFallbackPipe
  ],
  templateUrl: './technology-page.html',
  styleUrl: './technology-page.scss',
})
export class TechnologyPage {

  technologyItems: TechnologyItem[] = [
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
      icon: '/icons/nx.svg',
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
    {
      icon: '/icons/figma.png',
    },
    {
      icon: '/icons/jira.png',
    },
  ];

  aiItems: AiItem[] = [
    {
      icon: '/icons/codex.png',
    },
    {
      icon: '/icons/perplexity.png',
    },
    {
      icon: '/icons/gemini.png',
    }
  ];
}
