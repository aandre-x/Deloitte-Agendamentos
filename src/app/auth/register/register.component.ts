import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password, role } = this.registerForm.value;
      // Comentar até o backend estar disponível
      // this.authService.register(name!, email!, password!, role!).subscribe({
      //   next: () => {
      //     this.router.navigate(['/auth/login']);
      //   },
      //   error: () => this.notification.error('Erro ao registrar')
      // });
    }
  }
}