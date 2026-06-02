import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInProgressFeature } from './work-in-progress-feature';

describe('WorkInProgressFeature', () => {
  let component: WorkInProgressFeature;
  let fixture: ComponentFixture<WorkInProgressFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkInProgressFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkInProgressFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
