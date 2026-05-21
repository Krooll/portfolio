import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderFeature} from '../../project-features/shared/shared-features/header-feature/header-feature';
import {FooterFeature} from '../../project-features/shared/shared-features/footer-feature/footer-feature';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderFeature, FooterFeature],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
