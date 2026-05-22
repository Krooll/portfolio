import { Component } from '@angular/core';
import {TranslateFallbackPipe} from "../../shared/pipes/translate-pipe";

@Component({
  selector: 'app-projects-page',
    imports: [
        TranslateFallbackPipe
    ],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {}
