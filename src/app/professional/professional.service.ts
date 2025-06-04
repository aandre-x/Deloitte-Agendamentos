import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../shared/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  getServices(): Observable<{ id: string; name: string; description: string }[]> {
    return of([
      { id: '1', name: 'Consulta Médica', description: 'Consulta geral com clínico.' },
      { id: '2', name: 'Fisioterapia', description: 'Sessão de reabilitação física.' }
    ]);
  }

  getAgenda(filter: { startDate: string; endDate: string }): Observable<Appointment[]> {
    return of([
      {
        id: '1',
        date: '2025-06-11',
        time: '09:00',
        service: 'Consulta Médica',
        professional: 'Dr. João Silva',
        client: 'Paciente A',
        status: 'Agendado'
      },
      {
        id: '2',
        date: '2025-06-12',
        time: '14:00',
        service: 'Fisioterapia',
        professional: 'Dra. Maria Santos',
        client: 'Paciente B',
        status: 'Pendente'
      }
    ]);
  }

  updateAppointmentStatus(id: number, status: string): Observable<Appointment> {
    return of({
      id: id.toString(),
      date: '2025-06-11',
      time: '09:00',
      service: 'Consulta Médica',
      professional: 'Dr. João Silva',
      client: 'Paciente A',
      status: status
    });
  }

  createService(service: { name: string; description: string }): Observable<{ id: string; name: string; description: string }> {
    return of({
      id: Date.now().toString(),
      name: service.name,
      description: service.description
    });
  }

  updateService(service: { id: string; name: string; description: string }): Observable<{ id: string; name: string; description: string }> {
    return of(service);
  }

  deleteService(id: string): Observable<void> {
    return of(undefined);
  }
}
