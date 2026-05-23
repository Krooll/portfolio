import { Component } from '@angular/core';
import {TranslateFallbackPipe} from "../../shared/pipes/translate-pipe";

@Component({
  selector: 'app-experience-page',
    imports: [
        TranslateFallbackPipe
    ],
  templateUrl: './experience-page.html',
  styleUrl: './experience-page.scss',
})
export class ExperiencePage {}
