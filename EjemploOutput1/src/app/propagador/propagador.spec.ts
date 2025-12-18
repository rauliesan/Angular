import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propagador } from './propagador';

describe('Propagador', () => {
  let component: Propagador;
  let fixture: ComponentFixture<Propagador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Propagador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Propagador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
