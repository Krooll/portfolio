import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationShell } from './education-shell';

describe('EducationShell', () => {
  let component: EducationShell;
  let fixture: ComponentFixture<EducationShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationShell],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
