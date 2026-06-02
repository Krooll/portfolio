import { Component } from '@angular/core';
import {TranslateFallbackPipe} from "../../shared/pipes/translate-pipe";
import {WorkInProgressFeature} from '../../shared/shared-features/work-in-progress-feature/work-in-progress-feature';

@Component({
  selector: 'app-about-me-page',
  imports: [
    TranslateFallbackPipe,
    WorkInProgressFeature
  ],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.scss',
})
export class AboutMePage {}
