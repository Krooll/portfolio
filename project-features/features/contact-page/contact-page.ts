import {Component, inject, signal} from '@angular/core';
import {TranslateFallbackPipe} from '../../shared/pipes/translate-pipe';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

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

  formGroup = signal<FormGroup | undefined>(undefined);

  constructor() {
    this.formGroup.set(
      this._formBuilder.group({
        emailAddress: [''],
        message: ['']
      })
    )
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


  }

  routeToSocialPage(url: string) {
    window.open(url, '_blank');
  }
}
