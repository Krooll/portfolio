import {Component, ElementRef, HostListener, inject, signal, ViewChild} from '@angular/core';
import {expandCollapseAnimation} from '../../shared-assets/animations/expand-collapse.animation';
import {TranslateFallbackPipe} from '../../pipes/translate-pipe';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common';
import {LangChangeService} from '../../services/lang-change.service';

export interface MenuOptionsInterface {
  label: string;
  fallback: string;
  route: string;
  icon: string;
}

export interface MenuLangOptionsInterface {
  label: string;
  fallback: string;
  id: string;
  img: string;
  alt: string;
}

@Component({
  selector: 'app-header-feature',
  imports: [
    TranslateFallbackPipe,
    NgClass
  ],
  templateUrl: './header-feature.html',
  styleUrl: './header-feature.scss',
  animations: [expandCollapseAnimation]
})
export class HeaderFeature {
  private readonly _router = inject(Router);
  readonly langChangeService = inject(LangChangeService);

  isHeaderListOpen = signal<boolean>(false);
  isLangListOpen = signal<boolean>(false);

  @ViewChild('langDiv') langDiv!: ElementRef;
  @ViewChild('optionDiv') optionDiv!: ElementRef;

  menuOptionList: MenuOptionsInterface[] = [
    {
      label: 'headerComponent.headerMenuOptionList.mainPageButton',
      fallback: 'Strona główna',
      route: '/main-page',
      icon: '/home.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.experiencePageButton',
      fallback: 'Doświadczenie',
      route: '/experience',
      icon: '/brief-case.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.projectPageButton',
      fallback: 'Projekty',
      route: '/projects',
      icon: '/project.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.aboutMePageButton',
      fallback: 'O mnie',
      route: '/about-me',
      icon: '/about-me.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.contactPageButton',
      fallback: 'Kontakt',
      route: '/contact',
      icon: '/mailbox.png'
    },
  ];

  langOptionList: MenuLangOptionsInterface[] = [
    {
      label: 'headerComponent.headerLangOptionList.polish',
      fallback: 'Polski',
      id: 'pl',
      img: 'poland.png',
      alt: 'Poland flag'
    },
    {
      label: 'headerComponent.headerLangOptionList.english',
      fallback: 'Angielski',
      id: 'en',
      img: 'united-kingdom.png',
      alt: 'United Kingdome flag'
    }
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideLang =
      this.langDiv?.nativeElement.contains(event.target);

    const clickedInsideMenu =
      this.optionDiv?.nativeElement.contains(event.target);

    if (!clickedInsideLang) {
      this.isLangListOpen.set(false);
    }

    if (!clickedInsideMenu) {
      this.isHeaderListOpen.set(false);
    }
  }

  routeToSelectedPage(route: string) {
    if (!route) {
      console.log('Route is missing');
      return;
    }

    this._router.navigate([route]);
  }

  toggleLangSection() {
    if (this.isHeaderListOpen()) {
      this.isHeaderListOpen.set(false);
    }
    this.isLangListOpen.update((v) => !v);
  }

  toggleHeaderMenu() {
    if (this.isLangListOpen()) {
      this.isLangListOpen.set(false);
    }
    this.isHeaderListOpen.update((v) => !v);
  }
}
