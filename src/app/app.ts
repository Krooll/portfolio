import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderFeature} from '../../project-features/shared/shared-features/header-feature/header-feature';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderFeature],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
