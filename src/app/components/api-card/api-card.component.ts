import { Component, Input } from '@angular/core';
import { Api } from '../../models/api.interface';

@Component({
  selector: 'app-api-card',
  standalone: true,
  template: `
    <div class="api-card">
      <img [src]="api.icon" [alt]="api.name">
      <h3>{{api.name}}</h3>
      <p>{{api.description}}</p>
      <div class="buttons">
        <a [href]="api.tryItFreeLink" class="try-free">Try it for free</a>
        <a [href]="api.learnMoreLink" class="learn-more">Learn more</a>
      </div>
    </div>
  `,
  styles: [`
    .api-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .api-card:hover {
      transform: translateY(-5px);
    }
    .buttons {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }
    .try-free, .learn-more {
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
    }
    .try-free {
      background: #ff0000;
      color: white;
    }
    .learn-more {
      border: 1px solid #ff0000;
      color: #ff0000;
    }
  `]
})
export class ApiCardComponent {
  @Input() api!: Api;
}