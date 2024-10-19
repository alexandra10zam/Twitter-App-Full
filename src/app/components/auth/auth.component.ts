import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true
})
export class AuthComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']); // Navigate to the login page
  }

  onSignUp() {
    this.router.navigate(['/register']); // Navigate to the sign-up (register) page
  }
}
