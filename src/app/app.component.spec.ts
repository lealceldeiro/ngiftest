import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should hide contents if show is false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.whenStable().then(() => {
      const debugElement = fixture.debugElement;

      // should be rendered initially
      expect(debugElement.query(By.css('.header')).nativeElement).toBeTruthy();

      const button = debugElement.query(By.css('button')).nativeElement;
      button.click();         // this will change show to false
      fixture.detectChanges();

      // should not be rendered
      expect(debugElement.query(By.css('.header')).nativeElement).toBeFalsy();

    });
  });

});
