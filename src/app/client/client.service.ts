// src/app/client/client.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScheduleService } from './schedule.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private scheduleService: ScheduleService) {}

  getProfile(): Observable<{ name: string; email: string; phone?: string; birthDate?: string; address?: string }> {
    return of({
      name: 'Usuário Exemplo',
      email: 'usuario@exemplo.com'
    });
  }

  getServices(): Observable<{ id: number; name: string; description: string }[]> {
    return this.scheduleService.getServices().pipe(
      map(services => services.map(service => ({
        id: service.id,
        name: service.name,
        description: `Serviço de ${service.name.toLowerCase()} com profissionais qualificados.`
      })))
    );
  }

  getAppointments(): Observable<{ id: number; service: string; professional: string; date: string; slot: string; status: string }[]> {
    return of([
      {
        id: 1,
        service: 'Consulta Médica',
        professional: 'Dr. João Silva',
        date: '2025-06-03',
        slot: '09:00',
        status: 'Agendado'
      },
      {
        id: 2,
        service: 'Fisioterapia',
        professional: 'Dra. Maria Santos',
        date: '2025-05-30',
        slot: '14:00',
        status: 'Concluído'
      }
    ]);
  }
}