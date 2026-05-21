import {inject, Injectable, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable(
  {providedIn: 'root'}
)
export class LangChangeService {
  private readonly _translate = inject(TranslateService);

  currentLanguage = signal<string | undefined>(undefined);

  onChangeLang(id: string) {
    if (!id) return;
    localStorage.setItem('currentLang', id);
    this._translate.use(id).subscribe(() => {
        this.currentLanguage.set(id);
    });
  }
}
