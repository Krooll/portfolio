import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyShell } from './technology-shell';

describe('TechnologyShell', () => {
  let component: TechnologyShell;
  let fixture: ComponentFixture<TechnologyShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyShell],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
