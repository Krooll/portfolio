import { Component } from '@angular/core';
import {WorkInProgressFeature} from '../../shared/shared-features/work-in-progress-feature/work-in-progress-feature';
import {TranslateFallbackPipe} from '../../shared/pipes/translate-pipe';

@Component({
  selector: 'app-education-page',
  imports: [
    WorkInProgressFeature,
    TranslateFallbackPipe
  ],
  templateUrl: './education-page.html',
  styleUrl: './education-page.scss',
})
export class EducationPage {}
