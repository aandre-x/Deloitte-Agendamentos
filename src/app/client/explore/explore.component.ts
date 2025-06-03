import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  services$!: Observable<{ id: number; name: string; description: string }[]>;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.services$ = this.clientService.getServices();
  }
}