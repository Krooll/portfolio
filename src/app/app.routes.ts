import { Routes } from '@angular/router';
import {MainShell} from '../../project-features/shells/main-shell/main-shell';
import {MainPage} from '../../project-features/features/main-page/main-page';
import {AboutMeShell} from '../../project-features/shells/about-me-shell/about-me-shell';
import {AboutMePage} from '../../project-features/features/about-me-page/about-me-page';
import {ExperiencePage} from '../../project-features/features/experience-page/experience-page';
import {ExperienceShell} from '../../project-features/shells/experience-shell/experience-shell';
import {ContactShell} from '../../project-features/shells/contact-shell/contact-shell';
import {ContactPage} from '../../project-features/features/contact-page/contact-page';
import {ProjectsShell} from '../../project-features/shells/projects-shell/projects-shell';
import {ProjectsPage} from '../../project-features/features/projects-page/projects-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main-page',
  },
  {
    path: 'main-page',
    component: MainShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainPage
      },
    ]
  },
  {
    path: 'about-me',
    component: AboutMeShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AboutMePage
      },
    ]
  },
  {
    path: 'experience',
    component: ExperienceShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ExperiencePage
      },
    ]
  },
  {
    path: 'contact',
    component: ContactShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ContactPage
      },
    ]
  },
  {
    path: 'projects',
    component: ProjectsShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProjectsPage
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'main-page',
  }
];
