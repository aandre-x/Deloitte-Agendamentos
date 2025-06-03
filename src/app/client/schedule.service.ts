// src/app/client/schedule.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  getServices(): Observable<{ id: number; name: string }[]> {
    return of([
      { id: 1, name: 'Consulta Médica' },
      { id: 2, name: 'Fisioterapia' },
      { id: 3, name: 'Nutrição' }
    ]);
  }

  getProfessionals(serviceId: number): Observable<{ id: number; name: string }[]> {
    return of([
      { id: 1, name: 'Dr. João Silva' },
      { id: 2, name: 'Dra. Maria Santos' }
    ]);
  }

  getAvailableSlots(professionalId: number, date: string): Observable<string[]> {
    return of(['09:00', '10:00', '14:00', '15:00']);
  }
}