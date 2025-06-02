import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoExists = true; // Defina como false se logo.png não existir
}