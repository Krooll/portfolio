import { Component } from '@angular/core';
import { TranslateFallbackPipe } from '../../shared/pipes/translate-pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal-directive';

// export interface EducationItem {
//   universityName: string;
//   universityNameFallback: string;
//   degreeCourse: string;
//   degreeCourseFallback: string;
//   specialization: string;
//   specializationFallback: string;
//   status: string;
//   statusFallback: string;
//   startDate: string;
//   startDateFallback: string;
//   semester: string;
//   semesterFallback: string;
// }

@Component({
  selector: 'app-education-page',
  imports: [TranslateFallbackPipe, ScrollRevealDirective],
  templateUrl: './education-page.html',
  styleUrl: './education-page.scss',
})
export class EducationPage {
  educationItems: any[] = [
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
      startDateFallback: 'Rozpoczęcie Październik 2026',
      semester: '',
      semesterFallback: '',
      statusFlag: true,
    },
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
      startDateFallback: 'Rozpoczęcie Październik 2026',
      semester: '',
      semesterFallback: '',
      statusFlag: false,
    },
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
      startDateFallback: 'Rozpoczęcie Październik 2026',
      semester: '',
      semesterFallback: '',
      statusFlag: false,
    },
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
      startDateFallback: 'Rozpoczęcie Październik 2026',
      semester: '',
      semesterFallback: '',
      statusFlag: false,
    },
  ];
}
