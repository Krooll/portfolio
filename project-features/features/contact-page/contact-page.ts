import { Component, DestroyRef, inject, signal } from '@angular/core';
import { TranslateFallbackPipe } from '../../shared/pipes/translate-pipe';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal-directive';

export interface ContactButtonInterface {
  icon: string;
  alt: string;
  url: string;
}

export interface ContactFormInterface {
  emailAddress: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
  imports: [
    TranslateFallbackPipe,
    FormsModule,
    ReactiveFormsModule,
    FormField,
    MatProgressSpinner,
    ScrollRevealDirective,
  ],
  providers: [TranslateFallbackPipe],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _http = inject(HttpClient);
  private readonly _matSnackbarService = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);
  private readonly _translatePipe = inject(TranslateFallbackPipe);

  formModel = signal<ContactFormInterface>({
    emailAddress: '',
    message: '',
  });

  formGroupTest = form(this.formModel, (model) => {
    required(model.emailAddress);
    email(model.emailAddress);
    required(model.message);
    minLength(model.message, 5);
  });

  protected submitted = signal(false);

  protected readonly mailServiceAccessKey: string = '450c9a8e-b411-4aab-8e50-5f8fe120086a';
  protected readonly mailServiceUrl: string = 'https://api.web3forms.com/submit';

  constructor() {}

  contactButtonsList: ContactButtonInterface[] = [
    {
      icon: '/icons/linkedin-big.png',
      alt: 'Linkedin',
      url: 'https://www.linkedin.com/in/pawe%C5%82-kr%C3%B3l-b73960290/',
    },
    {
      icon: '/icons/github-big.png',
      alt: 'Github',
      url: 'https://github.com/Krooll',
    },
  ];

  onSubmit() {
    const submitData = this.formGroupTest()?.value();
    this.submitted.set(true);

    if (this.formGroupTest()?.invalid()) {
      return;
    }

    const mailBody = {
      access_key: this.mailServiceAccessKey,
      email: submitData.emailAddress,
      message: submitData.message,
    };

    this._http
      .post(this.mailServiceUrl, mailBody)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this._matSnackbarService.open(
            this.translateSnackBarText(
              'snackbar.success',
              'Hurra! \n Udało się — wiadomość została wysłana poprawnie.',
            ),
            '',
            {
              duration: 3000,
              panelClass: ['snackbar-success'],
              horizontalPosition: 'end',
              verticalPosition: 'top',
            },
          );

          this.formGroupTest()?.reset();
          this.submitted.set(false);
        },
        error: () => {
          this._matSnackbarService.open('snackbar.error', '', {
            duration: 3000,
            panelClass: ['snackbar-error'],
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
        },
      });
  }

  translateSnackBarText(text: string, fallback: string): string {
    return this._translatePipe.transform(text, fallback);
  }

  routeToSocialPage(url: string) {
    window.open(url, '_blank');
  }

  protected readonly window = window;
}
