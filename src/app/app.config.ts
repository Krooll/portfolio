import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideTranslateService, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from './translate-loader';
import {LangChangeService} from '../../project-features/shared/services/lang-change.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: 'pl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    provideAppInitializer(() => {
      const translate = inject(TranslateService);
      const languageService = inject(LangChangeService);

      const lang = localStorage.getItem('currentLang') ?? 'pl';
      languageService.currentLanguage.set(lang);
      translate.addLangs(['pl', 'en', 'de']);
      return translate.use(lang);
    }),
  ],
};
