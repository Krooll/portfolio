import {Component, inject, NgZone, OnDestroy, OnInit, signal} from '@angular/core';
import {TranslateFallbackPipe} from '../../pipes/translate-pipe';
import {TranslateService} from '@ngx-translate/core';

export interface TypeWordsInterface {
  label: string;
  fallback: string;
}

@Component({
  selector: 'app-type-write-feature',
  imports: [
  ],
  providers: [TranslateFallbackPipe],
  templateUrl: './type-write-feature.html',
  styleUrl: './type-write-feature.scss',
})
export class TypeWriteFeature implements OnInit, OnDestroy {
  private readonly _translatePipe = inject(TranslateFallbackPipe);
  private readonly _translate = inject(TranslateService);
  private readonly _ngZone = inject(NgZone);

  exampleWords: TypeWordsInterface[] = [
    {
      label: 'typeWriteComponent.exampleWords.angular',
      fallback: 'Angular...',
    },
    {
      label: 'typeWriteComponent.exampleWords.typeScript',
      fallback: 'TypeScript...',
    },
    {
      label: 'typeWriteComponent.exampleWords.javaScript',
      fallback: 'JavaScript...',
    },
    {
      label: 'typeWriteComponent.exampleWords.java',
      fallback: 'Java...',
    },
    {
      label: 'typeWriteComponent.exampleWords.spring',
      fallback: 'SpringBoot...',
    },
    {
      label: 'typeWriteComponent.exampleWords.hibernate',
      fallback: 'Hibernate...',
    },
    {
      label: 'typeWriteComponent.exampleWords.rxjs',
      fallback: 'Rxjs...',
    },
    {
      label: 'typeWriteComponent.exampleWords.html',
      fallback: 'HTML...',
    },
    {
      label: 'typeWriteComponent.exampleWords.css',
      fallback: 'CSS...',
    },
    {
      label: 'typeWriteComponent.exampleWords.bootstrap',
      fallback: 'Bootstrap...',
    },
    {
      label: 'typeWriteComponent.exampleWords.nx',
      fallback: 'NX...',
    },
    {
      label: 'typeWriteComponent.exampleWords.frontend',
      fallback: 'Frontend...',
    },
    {
      label: 'typeWriteComponent.exampleWords.backend',
      fallback: 'Backend...',
    },
  ];

  displayText = signal<string>('');

  private translateWords: string[] = [];
  private timeoutId?: any;

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  private typingSpeed = 160;
  private deleteSpeed = 60;
  private pauseTime = 1200;

  private refreshTranslatedWords(): void {
    this.translateWords = this.exampleWords.map((word) =>
      this._translatePipe.transform(word.label, word.fallback)
    );
  }

  ngOnInit() {
    this.refreshTranslatedWords();

    if (this.translateWords.length > 0) {
      this.displayText.set(this.translateWords[0].substring(0, 1));
      this.charIndex = 1;
    }

    this.scheduleNextTick(1000);

    this._translate.onLangChange.subscribe(() => {
      this.refreshTranslatedWords();
      this.resetAfterLangChange();
    });
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  private tick(): void {
    const fullText = this.translateWords[this.wordIndex] || '';

    if (!this.isDeleting) {
      this.charIndex++;
      const currentText = fullText.substring(0, this.charIndex);

      this._ngZone.run(() => this.displayText.set(currentText));

      if (this.charIndex >= fullText.length) {
        this.isDeleting = true;
        this.scheduleNextTick(this.pauseTime);
        return;
      }
      this.scheduleNextTick(this.typingSpeed);
    } else {
      this.charIndex--;
      const currentText = fullText.substring(0, this.charIndex);

      this._ngZone.run(() => this.displayText.set(currentText));

      if (this.charIndex <= 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.exampleWords.length;
        this.scheduleNextTick(300);
        return;
      }
      this.scheduleNextTick(this.deleteSpeed);
    }
  }

  private scheduleNextTick(delay: number): void {
    this._ngZone.runOutsideAngular(() => {
      this.timeoutId = setTimeout(() => this.tick(), delay);
    });
  }

  resetAfterLangChange() {
    clearTimeout(this.timeoutId);
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.displayText.set('');
    this.scheduleNextTick(100);
  }
}
