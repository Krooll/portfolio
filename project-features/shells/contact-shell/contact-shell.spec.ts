import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactShell } from './contact-shell';

describe('ContactShell', () => {
  let component: ContactShell;
  let fixture: ComponentFixture<ContactShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactShell],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
