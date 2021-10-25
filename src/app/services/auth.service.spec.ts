import { TestBed } from '@angular/core/testing';

import {AuthService, authUrl} from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const loginCredentials = { username: 'testor@example.com', password: 'secretz'};

describe('AuthService', () => {
  let service: AuthService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate user login', () => {
    // Auth tokens can be set in the header or the body
    const expected = { token: '1234567890' };

    service.authenticate(loginCredentials).subscribe(resp => {
      expect(resp.body).toEqual(expected);
      expect(service.isLoggedIn()).toBeTrue();
    });

    const res = httpTestController.expectOne(authUrl);
    res.flush(expected);
    httpTestController.verify();
  });

  it('should log user out', () => {
    const expected = { token: '1234567890' };

    service.authenticate(loginCredentials).subscribe(resp => {
      expect(service.isLoggedIn()).toBeTrue();
    });
    const res = httpTestController.expectOne(authUrl);
    res.flush(expected);

    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
  });
});
