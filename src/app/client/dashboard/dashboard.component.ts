import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile: { name: string; email: string; phone?: string; birthDate?: string; address?: string } | null = null;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getProfile().subscribe(profile => {
      this.profile = profile;
    });
  }
}
