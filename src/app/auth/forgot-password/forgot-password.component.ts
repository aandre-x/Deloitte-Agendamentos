import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const { email } = this.forgotPasswordForm.value;
      // Comentar até o backend estar disponível
      // this.authService.forgotPassword(email!).subscribe({
      //   next: () => {
      //     this.notification.success('Instruções enviadas para o email');
      //     this.router.navigate(['/auth/login']);
      //   },
      //   error: () => this.notification.error('Erro ao enviar')
      // });
    }
  }
}