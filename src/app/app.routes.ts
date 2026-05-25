import { Routes } from '@angular/router';
import { MainShell } from '../../project-features/shells/main-shell/main-shell';
import { MainPage } from '../../project-features/features/main-page/main-page';
import { AboutMeShell } from '../../project-features/shells/about-me-shell/about-me-shell';
import { AboutMePage } from '../../project-features/features/about-me-page/about-me-page';
import { ExperiencePage } from '../../project-features/features/experience-page/experience-page';
import { ExperienceShell } from '../../project-features/shells/experience-shell/experience-shell';
import { ContactShell } from '../../project-features/shells/contact-shell/contact-shell';
import { ProjectsShell } from '../../project-features/shells/projects-shell/projects-shell';

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
        component: MainPage,
      },
    ],
  },
  {
    path: 'about-me',
    component: AboutMeShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('../../project-features/features/about-me-page/about-me-page')
            .then(m => m.AboutMePage),
      },
    ],
  },
  {
    path: 'experience',
    component: ExperienceShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('../../project-features/features/experience-page/experience-page')
            .then(m => m.ExperiencePage)
      },
    ],
  },
  {
    path: 'contact',
    component: ContactShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
        import('../../project-features/features/contact-page/contact-page')
          .then(m => m.ContactPage)
      },
    ],
  },
  {
    path: 'projects',
    component: ProjectsShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('../../project-features/features/projects-page/projects-page')
            .then(m => m.ProjectsPage)
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'main-page',
  },
];
