import { Component } from '@angular/core';
import { TranslateFallbackPipe } from '../../shared/pipes/translate-pipe';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal-directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-education-page',
  imports: [TranslateFallbackPipe, ScrollRevealDirective, NgClass],
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
      status: 'educationItemsList.wsbUniversity.passed',
      statusFallback: 'Przyjęty',
      startDate: 'educationItemsList.wsbUniversity.startDate',
      startDateFallback: 'Rozpoczęcie Październik 2026',
      statusFlag: 'passed',
    },
    {
      universityName: 'educationItemsList.wsbUniversity.universityName',
      universityNameFallback: 'Akademia WSB w Dąbrowie Górniczej',
      degreeCourse: 'educationItemsList.wsbUniversity.degree',
      degreeCourseFallback: 'Informatyka - studia I stopnia',
      specialization: 'educationItemsList.wsbUniversity.specialization',
      specializationFallback: 'Inżynieria oprogramowania',
      status: 'educationItemsList.wsbUniversity.pending',
      statusFallback: 'Trwa',
      semester: 'educationItemsList.wsbUniversity.semester',
      semesterFallback: 'Pierwszy',
      statusFlag: 'progress',
    },
    {
      universityName: 'educationItemsList.wsbUniversity.universityName',
      universityNameFallback: 'Akademia WSB w Dąbrowie Górniczej',
      degreeCourse: 'educationItemsList.wsbUniversity.degree',
      degreeCourseFallback: 'Informatyka - studia I stopnia',
      specialization: 'educationItemsList.wsbUniversity.specialization',
      specializationFallback: 'Inżynieria oprogramowania',
      status: 'educationItemsList.wsbUniversity.waiting',
      statusFallback: 'Oczekuje',
      semester: 'educationItemsList.wsbUniversity.second',
      semesterFallback: 'Drugi',
    },
    {
      universityName: 'educationItemsList.wsbUniversity.universityName',
      universityNameFallback: 'Akademia WSB w Dąbrowie Górniczej',
      degreeCourse: 'educationItemsList.wsbUniversity.degree',
      degreeCourseFallback: 'Informatyka - studia I stopnia',
      specialization: 'educationItemsList.wsbUniversity.specialization',
      specializationFallback: 'Inżynieria oprogramowania',
      status: 'educationItemsList.wsbUniversity.waiting',
      statusFallback: 'Oczekuje',
      semester: 'educationItemsList.wsbUniversity.third',
      semesterFallback: 'Trzeci',
    },
    {
      universityName: 'educationItemsList.wsbUniversity.universityName',
      universityNameFallback: 'Akademia WSB w Dąbrowie Górniczej',
      degreeCourse: 'educationItemsList.wsbUniversity.degree',
      degreeCourseFallback: 'Informatyka - studia I stopnia',
      specialization: 'educationItemsList.wsbUniversity.specialization',
      specializationFallback: 'Inżynieria oprogramowania',
      status: 'educationItemsList.wsbUniversity.waiting',
      statusFallback: 'Oczekuje',
      semester: 'educationItemsList.wsbUniversity.fourth',
      semesterFallback: 'Czwarty',
    },
  ];
}
