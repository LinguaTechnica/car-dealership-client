import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  showLogin(): boolean {
    if (this.authService.isLoggedIn()) {
      this.authService.getUser().subscribe(user => this.user = user);
    }
    return this.authService.isLoggedIn();
  }
}
