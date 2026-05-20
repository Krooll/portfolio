import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-shell',
  imports: [
    RouterOutlet
  ],
  templateUrl: './main-shell.html',
  styleUrl: './main-shell.scss',
})
export class MainShell {}
