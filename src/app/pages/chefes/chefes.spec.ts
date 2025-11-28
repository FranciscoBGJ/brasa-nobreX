import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chefes } from './chefes';

describe('Chefes', () => {
  let component: Chefes;
  let fixture: ComponentFixture<Chefes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chefes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chefes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
