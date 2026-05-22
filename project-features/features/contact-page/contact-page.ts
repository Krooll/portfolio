import { Component } from '@angular/core';
import {TranslateFallbackPipe} from '../../shared/pipes/translate-pipe';

export interface ContactButtonInterface {
  icon: string;
  alt: string;
}

@Component({
  selector: 'app-contact-page',
  imports: [
    TranslateFallbackPipe
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {

  contactButtonsList: ContactButtonInterface[] =[
    {
      icon: '',
      alt: ''
    }
  ]
}
