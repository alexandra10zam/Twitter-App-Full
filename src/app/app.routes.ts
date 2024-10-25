import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';  // Assume you have these components

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },  // The authentication (welcome) page
  { path: 'login', component: LoginComponent },  // Login page
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/auth' }  // Fallback route
];
