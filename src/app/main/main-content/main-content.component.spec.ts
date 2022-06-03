import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainContentComponent } from './main-content.component';

describe('MainContentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MainContentComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainContentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RecruitApp'`, () => {
    const fixture = TestBed.createComponent(MainContentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RecruitApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainContentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('RecruitApp app is running!');
  });
});
