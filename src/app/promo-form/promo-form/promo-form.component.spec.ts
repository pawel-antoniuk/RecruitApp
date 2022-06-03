import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoFormComponent } from './promo-form.component';

describe('PromoFormComponent', () => {
  let component: PromoFormComponent;
  let fixture: ComponentFixture<PromoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
