import { Routes } from '@angular/router';
import { MainShell } from '../../project-features/shells/main-shell/main-shell';
import { MainPage } from '../../project-features/features/main-page/main-page';

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
    loadComponent: () =>
      import('../../project-features/shells/about-me-shell/about-me-shell')
        .then(m => m.AboutMeShell),
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
    loadComponent: () =>
      import('../../project-features/shells/experience-shell/experience-shell')
        .then(m => m.ExperienceShell),
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
    loadComponent: () =>
      import('../../project-features/shells/contact-shell/contact-shell')
        .then(m => m.ContactShell),
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
    loadComponent: () =>
      import('../../project-features/shells/projects-shell/projects-shell')
        .then(m => m.ProjectsShell),
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
    path: 'technology',
    loadComponent: () =>
      import('../../project-features/shells/technology-shell/technology-shell')
        .then(m => m.TechnologyShell),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('../../project-features/features/technology-page/technology-page')
            .then(m => m.TechnologyPage)
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'main-page',
  },
];
