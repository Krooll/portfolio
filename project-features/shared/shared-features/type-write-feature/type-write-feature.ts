import {Component, inject, signal} from '@angular/core';
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
export class TypeWriteFeature {
  private readonly _translatePipe = inject(TranslateFallbackPipe);
  private readonly _translate = inject(TranslateService);

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
      label: 'typeWriteComponent.exampleWords.frontend',
      fallback: 'Frontend...',
    },
    {
      label: 'typeWriteComponent.exampleWords.backend',
      fallback: 'Backend...',
    },
  ];

  displayText = signal<string>('');
  private wordIndex = signal<number>(0);
  private charIndex = signal<number>(0);
  private isDeleting = signal<boolean>(false);

  private typingSpeed = signal<number>(120);
  private deleteSpeed = signal<number>(60);
  private pauseTime = signal<number>(1200);

  private intervalId?: any;

  ngOnInit() {
    this.startTyping();

    this._translate.onLangChange.subscribe(() => {
      this.resetAfterLangChange();
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTyping() {
    console.log('Starting typing');
    this.intervalId = setInterval(() => this.tick(), this.typingSpeed());
  }

  tick(): void {
    const currentWord = this.exampleWords[this.wordIndex()];
    const fullText =
      this._translatePipe.transform(currentWord.label, currentWord.fallback);

    if (!this.isDeleting()) {
      const nextIndex = this.charIndex() + 1;
      this.charIndex.set(nextIndex);

      this.displayText.set(fullText.substring(0, nextIndex));

      if (this.charIndex() === currentWord.label.length) {
        this.isDeleting.set(true);
        clearInterval(this.intervalId);

        setTimeout(() => {
          this.intervalId = setInterval(() => this.tick(), this.deleteSpeed());
        }, this.pauseTime());
      }
    } else {
      const nextIndex = this.charIndex() - 1;
      this.charIndex.set(nextIndex);

      this.displayText.set(fullText.substring(0, nextIndex));

      if (this.charIndex() === 0) {
        this.isDeleting.set(false);
        this.wordIndex.set(
          (this.wordIndex() + 1) % this.exampleWords.length
        );

        clearInterval(this.intervalId);
        setTimeout(() => {
          this.intervalId = setInterval(() => this.tick(), this.typingSpeed());
        }, 300);
        }
    }
  }

  resetAfterLangChange() {
    this.displayText.set('');
    this.wordIndex.set(0);
    this.charIndex.set(0);
    this.isDeleting.set(false);

    clearInterval(this.intervalId);
    this.startTyping();
  }
}
