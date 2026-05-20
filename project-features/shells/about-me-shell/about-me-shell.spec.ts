import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeShell } from './about-me-shell';

describe('AboutMeShell', () => {
  let component: AboutMeShell;
  let fixture: ComponentFixture<AboutMeShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeShell],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
