import { Component } from '@angular/core';
import {TranslateFallbackPipe} from '../../shared/pipes/translate-pipe';

@Component({
  selector: 'app-main-page',
  imports: [
    TranslateFallbackPipe
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
