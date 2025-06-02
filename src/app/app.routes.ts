import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ClientDashboardComponent } from './client/dashboard/dashboard.component';
import { ExploreComponent } from './client/explore/explore.component';
import { ProfileComponent } from './client/profile/profile.component';
import { ProfessionalDashboardComponent } from './professional/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/forgot-password', component: ForgotPasswordComponent },
  { path: 'client', component: ClientDashboardComponent },
  { path: 'client/explore', component: ExploreComponent },
  { path: 'client/profile', component: ProfileComponent },
  { path: 'professional', component: ProfessionalDashboardComponent },
  { path: '**', redirectTo: '/auth/login' }
];