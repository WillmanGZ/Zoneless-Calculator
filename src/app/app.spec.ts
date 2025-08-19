import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be 2', () => {
    //A = Arrange
    const num1 = 1;
    const num2 = 2;

    //A = Act
    const result = num1 + num2;

    //A = Assert
    expect(result).toBe(3);
  });

  it('should render router outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
