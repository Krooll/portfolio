import {Component} from '@angular/core';
import {WorkInProgressFeature} from '../../shared/shared-features/work-in-progress-feature/work-in-progress-feature';
import {TranslateFallbackPipe} from '../../shared/pipes/translate-pipe';

export interface EducationItem {
  universityName: string;
  universityNameFallback: string;
  degreeCourse: string;
  degreeCourseFallback: string;
  specialization: string;
  specializationFallback: string;
  status: string;
  statusFallback: string;
  startDate: string;
  startDateFallback: string;
}

@Component({
  selector: 'app-education-page',
  imports: [
    WorkInProgressFeature,
    TranslateFallbackPipe
  ],
  templateUrl: './education-page.html',
  styleUrl: './education-page.scss',
})
export class EducationPage {

  educationItems: EducationItem[] = [
    {
      universityName: 'educationItemsList.wsbUniversity.universityName',
      universityNameFallback: 'Akademia WSB w Dąbrowie Górniczej',
      degreeCourse: 'educationItemsList.wsbUniversity.degree',
      degreeCourseFallback: 'Informatyka - studia I stopnia',
      specialization: 'educationItemsList.wsbUniversity.specialization',
      specializationFallback: 'Inżynieria oprogramowania',
      status: 'educationItemsList.wsbUniversity.status',
      statusFallback: 'Przyjęty',
      startDate: 'educationItemsList.wsbUniversity.startDate',
      startDateFallback: 'Rozpoczęcie Październik 2026'
    }
  ]
}
