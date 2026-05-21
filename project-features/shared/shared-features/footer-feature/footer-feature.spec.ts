import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFeature } from './footer-feature';

describe('FooterFeature', () => {
  let component: FooterFeature;
  let fixture: ComponentFixture<FooterFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
