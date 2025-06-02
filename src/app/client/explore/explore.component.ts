import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  services$: Observable<{ title: string; description: string; image: string }[]>;

  constructor(private clientService: ClientService) {
    this.services$ = this.clientService.getServices();
  }

  ngOnInit(): void {}
}
