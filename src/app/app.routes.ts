import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent as ClientDashboardComponent } from './client/dashboard/dashboard.component';
import { ExploreComponent } from './client/explore/explore.component';
import { ScheduleComponent } from './client/schedule/schedule.component';
import { HistoryComponent } from './client/history/history.component';
import { DashboardComponent as ProfessionalDashboardComponent } from './professional/dashboard/dashboard.component';
import { ServicesComponent } from './professional/services/services.component';
import { AvailabilityComponent } from './professional/availability/availability.component';
import { AgendaComponent } from './professional/agenda/agenda.component';

export const routes: Routes = [
  { path: 'client/dashboard', component: ClientDashboardComponent },
  { path: 'client/explore', component: ExploreComponent },
  { path: 'client/schedule', component: ScheduleComponent },
  { path: 'client/history', component: HistoryComponent },
  { path: 'professional/dashboard', component: ProfessionalDashboardComponent },
  { path: 'professional/services', component: ServicesComponent },
  { path: 'professional/availability', component: AvailabilityComponent },
  { path: 'professional/agenda', component: AgendaComponent },
  { path: '', redirectTo: '/client/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
