import { Routes } from '@angular/router';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { ExploreComponent } from './client/explore/explore.component';
import { ProfileComponent } from './client/profile/profile.component';
import { ScheduleComponent } from './client/schedule/schedule.component';
import { HistoryComponent } from './client/history/history.component';

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
  { path: '**', redirectTo: '/client' }
];