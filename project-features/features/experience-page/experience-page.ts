import {Component} from '@angular/core';
import {TranslateFallbackPipe} from "../../shared/pipes/translate-pipe";

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
      descriptionFallback: 'Od stycznia 2024 roku rozwijam się jako programista frontendowy, odpowiadając za tworzenie oraz utrzymanie interfejsów aplikacji webowych. Skupiam się na poprawie użyteczności, szybkości działania oraz spójności wizualnej produktów. W miarę zdobywania doświadczenia przechodziłem do pracy nad bardziej rozbudowanymi komponentami i modułami systemu. Aktywnie współpracuję z zespołami backendu oraz UX/UI, uczestnicząc w projektowaniu i wdrażaniu nowych funkcjonalności.'
    },
    {
      companyName: 'careerList.montService.companyName',
      companyNameFallback: 'Muddy code Sp. zoo',
      jobPosition: 'careerList.montService.jobPosition',
      jobPositionFallback: 'Programista Frontend',
      description: 'careerList.montService.description',
      descriptionFallback: 'Opowiadałem za diagnostykę, naprawę oraz obsługę techniczną urządzeń wykorzystywanych w systemach sprzedażowych, takich jak kasy fiskalne i terminale płatnicze. Wykonywałem instalacje, konfiguracje oraz usuwanie usterek sprzętowych i elektronicznych. Dbałem o niezawodność działania urządzeń oraz szybkie przywracanie ich sprawności, zapewniając ciągłość pracy punktów sprzedaży.'
    }
  ];

  downloadResume() {
    window.open(this.setResumeLang());
  }

  setResumeLang(): string {
    const currentLang = localStorage.getItem('currentLang');

    switch (currentLang) {
      case 'pl':
        return '/resume/Pawel_Krol_CV_PL.pdf';

      case 'en':
        return '/resume/Pawel_Krol_CV_EN.pdf';

      case 'de':
        return '/resume/Pawel_Krol_CV_EN.pdf';

      case 'it':
        return '/resume/Pawel_Krol_CV_EN.pdf';

      default:
        return '/resume/Pawel_Krol_CV_PL.pdf';    }
  }
}
