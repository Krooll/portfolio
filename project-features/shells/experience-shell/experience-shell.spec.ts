import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceShell } from './experience-shell';

describe('ExperienceShell', () => {
  let component: ExperienceShell;
  let fixture: ComponentFixture<ExperienceShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceShell],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
