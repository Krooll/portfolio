import {Component} from '@angular/core';
import {TranslateFallbackPipe} from "../../shared/pipes/translate-pipe";

export interface ProjectsObject {
  projectName: string;
  projectNameFallback: string;
  projectIcon: string;
  companyName: string;
  companyFallback: string;
  companyIcon: string;
  description: string;
  descriptionFallback: string;
  descriptionIcon: string;
  img?: string[];
  imgAlt?: string;
  imgIcon?: string;
  url?: string;
  urlIcon?: string;
}

@Component({
  selector: 'app-projects-page',
  imports: [
    TranslateFallbackPipe
  ],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {

  projectList: ProjectsObject[] = [
    {
      projectName: 'projectList.muddyCodeWorkspace.projectName',
      projectNameFallback: 'Strona www Muddy code',
      projectIcon: '/code2.png',
      companyName: 'projectList.muddyCodeWorkspace.companyName',
      companyFallback: 'Muddy code',
      companyIcon: '/company.png',
      description: 'projectList.muddyCodeWorkspace.description',
      descriptionIcon: '/text.png',
      descriptionFallback: 'Praca w monorepo Nx w ramach rozbudowanego systemu ERP typu multi-application (WMS / CS / PMS / MWS / MES). Projekt obejmował rozwój oraz utrzymanie wielu modułów biznesowych oraz współdzielonych komponentów i serwisów.\\n\\nZakres prac w modułach biznesowych\\n\\nModuł handlowy:\\nSłowniki kontrahentów, zlecenia klientów, cenniki oraz świadczenia.\\n\\nPMS:\\nLogika technologiczno-produkcyjna, wersje zwolnień, kartoteka zleceń, kalkulacje (cechy, relacje cech, rejestr wycen), rozbudowane słowniki (narzędzia, typy narzędzi, operacje, stanowiska, stawki gniazd, kwalifikacje, modyfikatory).\\n\\nSymulacje:\\nWersje symulacji oraz kartoteka symulacji.\\n\\nWMS:\\nGrupy indeksów oraz moduł logów systemowych (monitorowanie i prezentacja logów aplikacyjnych).\\n\\nMES:\\nSystem kontroli i monitorowania produkcji – obsługa procesów produkcyjnych, rejestracja pracy pracowników, kontrola realizacji zleceń produkcyjnych, ewidencja zużycia materiałów oraz bieżące śledzenie statusów operacji produkcyjnych.\\n\\nSerwisy i architektura systemu\\n\\nQBE Service – budowa i obsługa zapytań typu Query By Example (QBE).\\n\\nAttachment Service – upload i pobieranie załączników z obsługą progresu przesyłania danych (XMLHttpRequest z eventami progress), integracja z backendem oraz strumieniowe pobieranie po stronie frontu.\\n\\nUser Settings – zarządzanie ustawieniami użytkownika przechowywanymi w localStorage:\\n\\nkonfiguracje tabel i widoków\\nustawienia językowe\\nkontrola dostępu\\nMechanizmy autoryzacji i sesji\\nlogowanie oraz mechanizm ponownego logowania (session recovery)\\nobsługa wygasania tokena oraz retry requestów po jego odświeżeniu\\nanulowanie requestów przy zmianie użytkownika\\ninterceptory HTTP odpowiedzialne za obsługę tokena i autoryzacji\\nmechanizm idle timeout oparty o aktywność użytkownika (tracking zdarzeń myszy i klawiatury)\\nZarządzanie aplikacjami i dostępem\\n\\nActiveApp Service – kontrola dostępnych aplikacji i funkcjonalności per użytkownik (system uprawnień / entitlement).\\n\\nKomponenty i warstwa UI\\nkomponenty współdzielone: loader, attachment component\\nsystem obsługi błędów oparty o snackbar service\\nrozbudowany komponent drzewa (tree view):\\ndynamiczne dodawanie i usuwanie node’ów\\npodgląd szczegółów po hoverze\\ngenerowanie i prezentacja ścieżek procesów (np. produkcyjnych)\\nrozwój i wsparcie komponentów:\\nsystem modalny\\nnumeric keyboard component\\nPodsumowanie\\n\\nPrzez ponad 1,5 roku pracy nad projektem odpowiadałem za rozwój kluczowych obszarów systemu ERP – zarówno po stronie logiki biznesowej, jak i warstwy frontendowej, architektury serwisów oraz współdzielonych komponentów. Prace obejmowały rozbudowę istniejących modułów, implementację nowych funkcjonalności oraz stabilizację i rozwój systemu w środowisku enterprise.\n',
      img: ['', ''],
      imgAlt: 'muddycode',
      imgIcon: '/image2.png'
    },
    {
      projectName: 'projectList.muddyCodeSite.projectName',
      projectNameFallback: 'Strona www Muddy code',
      projectIcon: '/code2.png',
      companyName: 'projectList.muddyCodeSite.companyName',
      companyFallback: 'Muddy code',
      companyIcon: '/company.png',
      description: 'projectList.muddyCodeSite.description',
      descriptionFallback: 'Strona „Muddy Code” została zbudowana z wykorzystaniem platformy Wix. Jest to prosta strona internetowa zawierająca informacje o firmie, oferowanych usługach oraz sekcję kontaktową umożliwiającą bezpośrednią komunikację z klientem.',
      descriptionIcon: '/text.png',
      img: ['', ''],
      imgAlt: 'muddycode',
      imgIcon: '/image2.png',
      url: 'https://www.muddycode.pl/',
      urlIcon: '/url.png'
    },
    {
      projectName: 'projectList.familiaMedSite.projectName',
      projectNameFallback: 'Strona www Familiamed',
      projectIcon: '/code2.png',
      companyName: 'projectList.familiaMedSite.companyName',
      companyFallback: 'Familiamed',
      companyIcon: '/company.png',
      description: 'projectList.familiaMedSite.description',
      descriptionFallback: 'Rozwój i utrzymanie projektu, prace nad SEO (optymalizacja pozycjonowania), analiza i naprawa istniejących błędów oraz refaktoryzacja starszych elementów systemu. Rozbudowa strony głównej oraz podstron (w tym Familamed Clinique – plastyka powiek), a także usprawnianie wydajności i stabilności działania serwisu. Kontynuacja i rozwój projektu po poprzednich zespołach, z naciskiem na poprawę jakości kodu i doświadczenia użytkownika.',
      descriptionIcon: '/text.png',
      img: ['', ''],
      imgAlt: 'familiamed',
      imgIcon: '/image2.png',
      url: 'https://familiamed.pl/',
      urlIcon: '/url.png'
    },
    {
      projectName: 'projectList.quickAtest.projectName',
      projectNameFallback: 'Quick atest',
      projectIcon: '/code2.png',
      companyName: 'projectList.quickAtest.companyName',
      companyFallback: 'Muddy code',
      companyIcon: '/company.png',
      description: 'projectList.quickAtest.description',
      descriptionFallback: 'Aplikacja typu single-page „Quick Atest” została zaprojektowana, aby usprawnić proces tworzenia i łączenia dokumentów wymaganych do realizacji zleceń. Umożliwia ona filtrowanie treści, generowanie danych do pliku Excel oraz pobieranie wybranych dokumentów w formie jednego, połączonego pliku PDF.',
      descriptionIcon: '/text.png',
      img: ['', ''],
      imgAlt: 'quick-atest',
      imgIcon: '/image2.png',
    },
  ];
}
