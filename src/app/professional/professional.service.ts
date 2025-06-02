import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface Service {
  id: string;
  name: string;
  description: string;
}

interface Availability {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/services`);
  }

  createService(service: Service): Observable<Service> {
    return this.http.post<Service>(`${this.apiUrl}/services`, service);
  }

  updateService(service: Service): Observable<Service> {
    return this.http.put<Service>(`${this.apiUrl}/services/${service.id}`, service);
  }

  deleteService(serviceId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/services/${serviceId}`);
  }

  getAvailability(): Observable<Availability[]> {
    return this.http.get<Availability[]>(`${this.apiUrl}/availability`);
  }

  updateAvailability(availability: Availability): Observable<Availability> {
    return this.http.post<Availability>(`${this.apiUrl}/availability`, availability);
  }

  getAgenda(filter: { startDate: string; endDate: string }): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/agenda`, { params: filter });
  }

  updateAppointmentStatus(appointmentId: string, status: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/appointments/${appointmentId}`, { status });
  }
}