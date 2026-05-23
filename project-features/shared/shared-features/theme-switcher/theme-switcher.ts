import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ThemeService, ThemeType} from '../../services/theme-swticher.service';

@Component({
  selector: 'app-theme-switcher',
  imports: [ReactiveFormsModule],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  readonly _themeSwitcherService = inject(ThemeService);

  onSwitcherCheck(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this._themeSwitcherService.onThemeChanged(checked);
  }

  protected readonly ThemeType = ThemeType;
}
