import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './auth-interceptor.service';

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HTTP_INTERCEPTORS, useValue: authInterceptor, multi: true }
    ]
  }));

  it('should be created', () => {
    const interceptor = TestBed.runInInjectionContext(() => authInterceptor);
    expect(interceptor).toBeTruthy();
  });
});