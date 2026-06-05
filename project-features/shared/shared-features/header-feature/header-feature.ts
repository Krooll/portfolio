import {Component, ElementRef, HostListener, inject, signal, ViewChild} from '@angular/core';
import {TranslateFallbackPipe} from '../../pipes/translate-pipe';
import {Router} from '@angular/router';
import {LangChangeService} from '../../services/lang-change.service';
import {ThemeSwitcher} from '../theme-switcher/theme-switcher';
import {ThemeService, ThemeType} from '../../services/theme-swticher.service';

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
    ThemeSwitcher
  ],
  templateUrl: './header-feature.html',
  styleUrl: './header-feature.scss',
})
export class HeaderFeature {
  private readonly _router = inject(Router);
  readonly _langChangeService = inject(LangChangeService);
  readonly _themeService = inject(ThemeService);

  isHeaderListOpen = signal<boolean>(false);

  @ViewChild('langDiv') langDiv!: ElementRef;
  @ViewChild('optionDiv') optionDiv!: ElementRef;

  menuOptionList: MenuOptionsInterface[] = [
    {
      label: 'headerComponent.headerMenuOptionList.mainPageButton',
      fallback: 'Strona główna',
      route: '/main-page',
      icon: '/icons/home.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.aboutMePageButton',
      fallback: 'O mnie',
      route: '/about-me',
      icon: '/icons/person.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.experiencePageButton',
      fallback: 'Doświadczenie',
      route: '/experience',
      icon: '/icons/brief-case.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.projectPageButton',
      fallback: 'Projekty',
      route: '/projects',
      icon: '/icons/code.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.technologyPageButton',
      fallback: 'Technologie',
      route: '/technology',
      icon: '/icons/mail.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.educationPageButton',
      fallback: 'Edukacja',
      route: '/education',
      icon: '/icons/education-small.png'
    },
    {
      label: 'headerComponent.headerMenuOptionList.contactPageButton',
      fallback: 'Kontakt',
      route: '/contact',
      icon: '/icons/mail.png'
    },
  ];

  langOptionList: MenuLangOptionsInterface[] = [
    {
      label: 'headerComponent.headerLangOptionList.polish',
      fallback: 'Polski',
      id: 'pl',
      img: '/icons/poland.png',
      alt: 'Change language to Polish'
    },
    {
      label: 'headerComponent.headerLangOptionList.english',
      fallback: 'Angielski',
      id: 'en',
      img: '/icons/united-kingdom.png',
      alt: 'Change language to English'
    },
    {
      label: 'headerComponent.headerLangOptionList.germans',
      fallback: 'Niemiecki',
      id: 'de',
      img: '/icons/germany.png',
      alt: 'Change language to German'
    }
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideLang =
      this.langDiv?.nativeElement.contains(event.target);

    const clickedInsideMenu =
      this.optionDiv?.nativeElement.contains(event.target);

    if (!clickedInsideLang) {
      this._langChangeService.isLangListOpen.set(false);
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

    this.isHeaderListOpen.set(false);

    this._router.navigate([route]);
  }

  toggleLangSection() {
    if (this.isHeaderListOpen()) {
      this.isHeaderListOpen.set(false);
    }
    this._langChangeService.isLangListOpen.update((v) => !v);
  }

  toggleHeaderMenu() {
    if (this._langChangeService.isLangListOpen()) {
      this._langChangeService.isLangListOpen.set(false);
    }
    this.isHeaderListOpen.update((v) => !v);
  }

  setCurrentFlag(): string {
    const currentLang =  this._langChangeService.currentLanguage();

    switch (currentLang) {
      case 'pl':
        return '/icons/poland.png';

      case 'en':
        return '/icons/united-kingdom.png';

      case 'de':
        return '/icons/germany.png';

      default:
        return '/icons/poland.png';
    }
  }

  protected readonly ThemeType = ThemeType;
}
