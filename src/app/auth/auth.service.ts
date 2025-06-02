import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface User {
  id: string;
  email: string;
  role: 'CLIENT' | 'PROFESSIONAL';
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.userSubject.next(user);
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(user => {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        })
      );
  }

  register(data: { email: string; password: string; name: string; role: string }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/register`, data)
      .pipe(
        tap(user => {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        })
      );
  }

  forgotPassword(email: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auth/forgot-password`, { email });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  getCurrentUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserRole(): string | null {
    const user = this.userSubject.value;
    return user ? user.role : null;
  }
}