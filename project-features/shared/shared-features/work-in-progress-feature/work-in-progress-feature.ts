import { Component } from '@angular/core';
import {TranslateFallbackPipe} from '../../pipes/translate-pipe';

@Component({
  selector: 'app-work-in-progress-feature',
  imports: [
    TranslateFallbackPipe
  ],
  templateUrl: './work-in-progress-feature.html',
  styleUrl: './work-in-progress-feature.scss',
})
export class WorkInProgressFeature {}
