import { Component, Input } from '@angular/core';
import { Api } from '../../models/api.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-card',
  standalone: true,
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.css'],
  imports: [RouterModule, CommonModule]
})
export class ApiCardComponent {
  @Input() api!: Api;

  getStatusClass(status: string) {
    switch (status?.toLowerCase()) {
      case "in development": return "in-development";
      case "beta": return "beta";
      case "alpha": return "alpha";
      case "available": return "available";
      default: return "not-available";
    }
  }
}