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

  it('should be 3', () => {
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

  it('should render router outlet wrapped with css classes', () => {
    const divElement = compiled.querySelector('div');
    const mustHaveClasses =
      'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(
        ' '
      );
    const divClasses = divElement?.classList.value.split(' ');

    expect(divElement).not.toBeNull();

    mustHaveClasses.forEach((className) => {
      expect(divClasses).toContain(className);
    });
  });

  it("should cointain the 'buy me a beer' link", () => {
    const anchorElement = compiled.querySelector('a');
    expect(anchorElement).not.toBeNull();

    const anchorTitle = anchorElement?.getAttribute('title');
    expect(anchorTitle).not.toBeNull();

    const anchorHref = anchorElement?.getAttribute('href');
    expect(anchorHref).not.toBeNull();

    expect(anchorTitle).toEqual('Buy me a beer');
    expect(anchorHref).toEqual('https://www.buymeacoffee.com/scottwindon');
  });
});
