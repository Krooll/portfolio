import {Component, DestroyRef, inject, signal} from '@angular/core';
import {TranslateFallbackPipe} from '../../shared/pipes/translate-pipe';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

export interface ContactButtonInterface {
  icon: string;
  alt: string;
  url: string;
}

@Component({
  selector: 'app-contact-page',
  imports: [
    TranslateFallbackPipe,
    FormsModule,
    ReactiveFormsModule
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

  formGroup = signal<FormGroup | undefined>(undefined);
  protected submitted = signal(false);

  protected readonly mailServiceAccessKey: string = '450c9a8e-b411-4aab-8e50-5f8fe120086a';
  protected readonly mailServiceUrl: string = 'https://api.web3forms.com/submit';

  constructor() {
    this.formGroup.set(
      this._formBuilder.group({
        emailAddress: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(5)]],
      })
    );
  }

  contactButtonsList: ContactButtonInterface[] = [
    {
      icon: '/icons/linkedin-big.png',
      alt: 'Linkedin',
      url: 'https://www.linkedin.com/in/pawe%C5%82-kr%C3%B3l-b73960290/'
    },
    {
      icon: '/icons/github-big.png',
      alt: 'Github',
      url: 'https://github.com/Krooll'
    },
  ];

  onSubmit() {
    const submitData = this.formGroup()?.value;
    this.submitted.set(true);

    if (this.formGroup()?.invalid) {
      return;
    }

    const mailBody = {
      access_key: this.mailServiceAccessKey,
      email: submitData.emailAddress,
      message: submitData.message,
    }

    this._http.post(
      this.mailServiceUrl,
      mailBody
    ).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this._matSnackbarService.open(this.translateSnackBarText('snackbar.success', 'Hurra! \n Udało się — wiadomość została wysłana poprawnie.'), '', {
          duration: 3000,
          panelClass: ['snackbar-success'],
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });

        this.formGroup()?.reset();
        this.submitted.set(false);
      },
      error: () => {
        this._matSnackbarService.open('snackbar.error', '', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
      }
    })
  }

  translateSnackBarText(text: string, fallback: string): string{
    return this._translatePipe.transform(text, fallback)
  }

  routeToSocialPage(url: string) {
    window.open(url, '_blank');
  }
}
