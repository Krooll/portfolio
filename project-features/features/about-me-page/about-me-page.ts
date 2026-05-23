import { Component } from '@angular/core';
import {TranslateFallbackPipe} from "../../shared/pipes/translate-pipe";

@Component({
  selector: 'app-about-me-page',
    imports: [
        TranslateFallbackPipe
    ],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.scss',
})
export class AboutMePage {}
