import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inline-login-form',
  templateUrl: './inline-login-form.component.html',
  styleUrls: ['./inline-login-form.component.css']
})
export class InlineLoginFormComponent implements OnInit {
  loginForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['fakeuser', Validators.required],
      password: ['badpassword', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.authenticate(this.loginForm.value).subscribe(_ => {
        this.router.navigateByUrl('/');
      });
    } else {
      this.message = 'Invalid login.';
    }
  }

  isValid(): boolean {
    return this.loginForm.valid && this.loginForm.dirty;
  }

}
