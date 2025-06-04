import { Routes } from '@angular/router';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { ExploreComponent } from './client/explore/explore.component';
import { ProfileComponent } from './client/profile/profile.component';
import { ScheduleComponent } from './client/schedule/schedule.component';
import { HistoryComponent } from './client/history/history.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfessionalDashboardComponent } from './professional/dashboard/dashboard.component';
import { ServicesComponent } from './professional/services/services.component';
import { AvailabilityComponent } from './professional/availability/availability.component';
import { AgendaComponent } from './professional/agenda/agenda.component';

export const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  {
    path: 'client',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'explore', component: ExploreComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'history', component: HistoryComponent }
    ]
  },
  {
    path: 'professional',
    children: [
      { path: 'dashboard', component: ProfessionalDashboardComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'availability', component: AvailabilityComponent },
      { path: 'agenda', component: AgendaComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/client' }
];