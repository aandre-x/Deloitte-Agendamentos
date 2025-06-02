import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  getServices(): Observable<{ title: string; description: string; image: string }[]> {
    return of([
      { title: 'Consulta Médica', description: 'Agende com especialistas.', image: '/assets/service1.png' },
      { title: 'Fisioterapia', description: 'Sessões personalizadas.', image: '/assets/service2.png' },
      { title: 'Nutrição', description: 'Planos alimentares.', image: '/assets/service3.png' },
    ]);
  }
}