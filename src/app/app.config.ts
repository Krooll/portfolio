import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideTranslateService, TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from './translate-loader';
import {provideAnimations} from '@angular/platform-browser/animations';

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

      translate.addLangs(['pl', 'en']);
      translate.setFallbackLang('pl');

      return translate.use('pl');
    }),
  ],
};
