import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPlaceholderComponent } from './step-placeholder.component';

describe('StepPlaceholderComponent', () => {
  let component: StepPlaceholderComponent;
  let fixture: ComponentFixture<StepPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
