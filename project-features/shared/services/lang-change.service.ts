import {inject, Injectable, signal, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable(
  {providedIn: 'root'}
)
export class LangChangeService {
  private readonly _translate = inject(TranslateService);

  currentLanguage = signal<string | undefined>(undefined);
  isLangListOpen = signal<boolean>(false);


  onChangeLang(id: string) {
    if (!id) return;
    localStorage.setItem('currentLang', id);
    this._translate.use(id).subscribe(() => {
        this.currentLanguage.set(id);
        this.isLangListOpen.set(false);
    });
  }
}
