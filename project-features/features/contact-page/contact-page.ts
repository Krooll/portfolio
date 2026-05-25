import {Component, DestroyRef, inject, signal} from '@angular/core';
import {TranslateFallbackPipe} from '../../shared/pipes/translate-pipe';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
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
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _http = inject(HttpClient);
  private readonly _matSnackbarService = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  formGroup = signal<FormGroup | undefined>(undefined);

  protected readonly mailServiceAccessKey: string = '450c9a8e-b411-4aab-8e50-5f8fe120086a';
  protected readonly mailServiceUrl: string = 'https://api.web3forms.com/submit';

  constructor() {
    this.formGroup.set(
      this._formBuilder.group({
        emailAddress: [''],
        message: ['']
      })
    );
  }

  contactButtonsList: ContactButtonInterface[] = [
    {
      icon: 'linkedin-big.png',
      alt: 'Linkedin',
      url: 'https://www.linkedin.com/in/pawe%C5%82-kr%C3%B3l-b73960290/'
    },
    {
      icon: 'github-big.png',
      alt: 'Github',
      url: 'https://github.com/Krooll'
    },
  ];

  onSubmit() {
    const submitData = this.formGroup()?.value;

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
        this._matSnackbarService.open('Wysłano wiadomość', '', {
          duration: 3000,
          panelClass: ['snackbar-success'],
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });

        this.formGroup()?.reset();
      },
      error: () => {
        this._matSnackbarService.open('Ups coś poszło nie tak...', '', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
      }
    })
  }

  routeToSocialPage(url: string) {
    window.open(url, '_blank');
  }
}
