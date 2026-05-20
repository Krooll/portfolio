import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({ name: 'translateFallback', standalone: true, pure: false })
export class TranslateFallbackPipe implements PipeTransform {
  private readonly translateService = inject(TranslateService);

  transform(value: string | undefined, fallback: string): string {
    if (!value) {
      return '';
    }

    const translatedValue = this.translateService.instant(value);

    return (translatedValue === value || this.isBlank(translatedValue)) && !this.isBlank(fallback)
      ? fallback
      : translatedValue;
  }

  private isBlank(value: string): boolean {
    return value === null || value === void 0 || value === '';
  }
}
