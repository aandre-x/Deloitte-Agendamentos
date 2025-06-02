import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(HttpClientModule),
    { provide: AuthInterceptor, useClass: AuthInterceptor }
  ]
};
