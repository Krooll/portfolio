import {Component, effect, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderFeature} from '../../project-features/shared/shared-features/header-feature/header-feature';
import {LangChangeService} from '../../project-features/shared/services/lang-change.service';
import {FooterFeature} from '../../project-features/shared/shared-features/footer-feature/footer-feature';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderFeature, FooterFeature],
  providers: [TranslateService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly langChangeService = inject(LangChangeService);
}
