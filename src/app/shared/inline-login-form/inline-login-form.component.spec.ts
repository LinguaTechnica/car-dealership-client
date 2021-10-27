import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { InlineLoginFormComponent } from './inline-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable, of } from 'rxjs';
import {By} from '@angular/platform-browser';

class MockAuthService {
  authenticated: boolean;

  authenticate(credentials): Observable<any> {
    this.authenticated = true;
    return of({});
  }

  isLoggedIn(): boolean {
    return this.authenticated;
  }
}

describe('InlineLoginFormComponent', () => {
  let component: InlineLoginFormComponent;
  let fixture: ComponentFixture<InlineLoginFormComponent>;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineLoginFormComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: AuthService, useClass: MockAuthService }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineLoginFormComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login valid user', () => {
    spyOn(component, 'login');
    // TODO: Destructuring did not work on these 2 vars. Why?
    const usernameEl = component.loginForm.controls.username;
    const passwordEl = component.loginForm.controls.password;
    const formButton = html.querySelector('button');
    usernameEl.setValue('Testor');
    passwordEl.setValue('password');
    formButton.click();
    expect(component.loginForm.valid).toBeTrue();
    expect(component.login).toHaveBeenCalled();
  });

  it('should display message on invalid login', () => {
    // TODO: Does not seem to make the form dirty at all. Fix the template!
    // component.loginForm.markAsDirty();
    // const el = fixture.debugElement.query(By.css('#username'));
    // el.nativeElement.value = 'testor';
    // el.nativeElement.dispatchEvent(new Event('input'));
    const formButton = html.querySelector('button');
    const messageEl = html.querySelector('#message');
    formButton.click();
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeFalse();
    expect(messageEl).not.toBeNull();
  });
});
