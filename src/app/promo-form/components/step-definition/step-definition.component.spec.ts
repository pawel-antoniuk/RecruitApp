import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDefinitionComponent } from './step-definition.component';

describe('StepDefinitionComponent', () => {
  let component: StepDefinitionComponent;
  let fixture: ComponentFixture<StepDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
