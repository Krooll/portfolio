import {Component, signal} from '@angular/core';
import { expandCollapseAnimation } from '../../shared-assets/animations/expand-collapse.animation';

@Component({
  selector: 'app-header-feature',
  imports: [],
  templateUrl: './header-feature.html',
  styleUrl: './header-feature.scss',
  animations: [expandCollapseAnimation]
})
export class HeaderFeature {
  showHeaderListWrapper = signal<boolean>(false);

  onBurgerButtonClick() {
    this.showHeaderListWrapper.update((v) => !v);
  }
 }
