import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFeature } from './header-feature';

describe('HeaderFeature', () => {
  let component: HeaderFeature;
  let fixture: ComponentFixture<HeaderFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
