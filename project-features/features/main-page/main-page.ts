import { Component } from '@angular/core';
import {TypeWriteFeature} from '../../shared/shared-features/type-write-feature/type-write-feature';
import {TranslateFallbackPipe} from '../../shared/pipes/translate-pipe';

@Component({
  selector: 'app-main-page',
  imports: [
    TypeWriteFeature,
    TranslateFallbackPipe
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
