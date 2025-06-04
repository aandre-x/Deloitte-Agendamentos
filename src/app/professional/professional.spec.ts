/*
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfessionalService } from './professional.service';
import { environment } from '../../environments/environment';

describe('ProfessionalService', () => {
  let service: ProfessionalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfessionalService]
    });
    service = TestBed.inject(ProfessionalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get services', () => {
    const mockServices = [
      { id: '1', name: 'Consulta Médica', description: 'Consulta geral' },
      { id: '2', name: 'Fisioterapia', description: 'Sessão de fisioterapia' }
    ];
    service.getServices().subscribe(services => {
      expect(services).toEqual(mockServices);
    });
    const req = httpMock.expectOne(`${environment.apiUrl}/services`);
    expect(req.request.method).toBe('GET');
    req.flush(mockServices);
  });
});*/
