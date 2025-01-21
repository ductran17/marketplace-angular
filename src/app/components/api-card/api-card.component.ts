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
  `,styleUrls: ['./api-card.component.css']
})
export class ApiCardComponent {
  @Input() api!: Api;
}