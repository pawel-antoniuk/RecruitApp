import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryControlDescriptionComponent } from './summary-control-description.component';

describe('SummaryControlDescriptionComponent', () => {
  let component: SummaryControlDescriptionComponent;
  let fixture: ComponentFixture<SummaryControlDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryControlDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryControlDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
