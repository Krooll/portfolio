import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWriteFeature } from './type-write-feature';

describe('TypeWriteFeature', () => {
  let component: TypeWriteFeature;
  let fixture: ComponentFixture<TypeWriteFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeWriteFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeWriteFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
