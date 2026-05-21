import { Component } from '@angular/core';
import {TranslateFallbackPipe} from '../../pipes/translate-pipe';

@Component({
  selector: 'app-footer-feature',
  imports: [
    TranslateFallbackPipe
  ],
  templateUrl: './footer-feature.html',
  styleUrl: './footer-feature.scss',
})
export class FooterFeature {}
