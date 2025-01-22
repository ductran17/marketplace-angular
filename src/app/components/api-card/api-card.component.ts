import { Component, Input } from '@angular/core';
import { Api } from '../../models/api.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-card',
  standalone: true,
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.css'],
  imports: [RouterModule]
})
export class ApiCardComponent {
  @Input() api!: Api;
}