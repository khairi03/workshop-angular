import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirences } from './confirences';

describe('Confirences', () => {
  let component: Confirences;
  let fixture: ComponentFixture<Confirences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confirences],
    }).compileComponents();

    fixture = TestBed.createComponent(Confirences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
