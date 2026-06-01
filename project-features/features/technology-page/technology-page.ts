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
      icon: '/angular.png',
    },
    {
      icon: '/ts.png',
    },
    // {
    //   icon: '/rxjs.png',
    // },
    {
      icon: '/js.png',
    },
    {
      icon: '/nx.svg',
    },
    {
      icon: '/boostrap.png',
    },
    {
      icon: '/html.png',
    },
    {
      icon: '/css.png',
    },
    {
      icon: '/jest.svg',
    },
    {
      icon: '/cypress.svg',
    },
    {
      icon: '/npm.png',
    },
    {
      icon: '/keycloak.png',
    },
    {
      icon: '/docker.png',
    },
    {
      icon: '/figma.png',
    },
    {
      icon: '/jira.png',
    },
  ];

  aiItems: AiItem[] = [
    {
      icon: '/codex.png',
    },
    {
      icon: '/perplexity.png',
    },
    {
      icon: '/gemini.png',
    }
  ];
}
