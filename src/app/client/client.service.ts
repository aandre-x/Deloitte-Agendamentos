import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfessionalService } from '../professional/professional.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private professionalService: ProfessionalService) {}

  getProfile(): Observable<{ name: string; email: string; phone?: string; birthDate?: string; address?: string }> {
    return of({
      name: 'Usuário Exemplo',
      email: 'usuario@exemplo.com'
    });
  }

  getServices(): Observable<{ id: number; name: string; description: string }[]> {
    return this.professionalService.getServices().pipe(
      map(services => services.map(service => ({
        id: parseInt(service.id, 10),
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
        date: '2025-06-11',
        slot: '09:00',
        status: 'Agendado'
      },
      {
        id: 2,
        service: 'Fisioterapia',
        professional: 'Dra. Maria Santos',
        date: '2025-06-12',
        slot: '14:00',
        status: 'Concluído'
      }
    ]);
  }
}
