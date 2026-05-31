import { Component } from '@angular/core';
import {TranslateFallbackPipe} from "../../shared/pipes/translate-pipe";
import {of} from 'rxjs';

export interface CareerItem {
  companyName: string;
  companyNameFallback: string;
  jobPosition: string;
  jobPositionFallback: string;
  description: string;
  descriptionFallback: string;
}

@Component({
  selector: 'app-experience-page',
    imports: [
        TranslateFallbackPipe
    ],
  templateUrl: './experience-page.html',
  styleUrl: './experience-page.scss',
})
export class ExperiencePage {

  careerList: CareerItem[] = [
    {
      companyName: 'careerList.muddyCode.companyName',
      companyNameFallback: 'Muddy code Sp. zoo',
      jobPosition: 'careerList.muddyCode.jobPosition',
      jobPositionFallback: 'Programista Frontend',
      description: 'careerList.muddyCode.description',
      descriptionFallback: 'opis'
    },
    {
      companyName: 'careerList.montService.companyName',
      companyNameFallback: 'Muddy code Sp. zoo',
      jobPosition: 'careerList.montService.jobPosition',
      jobPositionFallback: 'Programista Frontend',
      description: 'careerList.montService.description',
      descriptionFallback: 'opis'
    }
  ];
  protected readonly of = of;
}
