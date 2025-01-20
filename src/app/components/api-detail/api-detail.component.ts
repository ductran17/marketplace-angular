import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Api } from '../../models/api.interface'
import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-api-detail',
//   standalone: true,
//   imports: [],
//   templateUrl: './api-detail.component.html',
//   styleUrl: './api-detail.component.css'
// })
// export class ApiDetailComponent {

// }

@Component({
  selector: 'app-api-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-detail-container">
      <nav class="left-nav">
        <ul>
          <li [class.active]="activeTab === 'overview'" (click)="setActiveTab('overview')">Overview</li>
          <li [class.active]="activeTab === 'documentation'" (click)="setActiveTab('documentation')">Documentation</li>
          <li [class.active]="activeTab === 'sandbox'" (click)="setActiveTab('sandbox')">Sandbox</li>
          <li [class.active]="activeTab === 'terms'" (click)="setActiveTab('terms')">Terms and Conditions</li>
          <li [class.active]="activeTab === 'contact'" (click)="setActiveTab('contact')">Contact us</li>
        </ul>
      </nav>
      
      <main class="content">
        <ng-container [ngSwitch]="activeTab">
          <div *ngSwitchCase="'overview'">
            <!-- Overview content -->
          </div>
          <div *ngSwitchCase="'documentation'">
            <!-- Documentation content -->
          </div>
          <!-- Other tab contents -->
        </ng-container>
      </main>

      <nav class="right-nav">
        <div class="table-of-contents">
          <!-- Dynamic table of contents based on active tab -->
        </div>
      </nav>
    </div>
  `,
  styles: [`
    .api-detail-container {
      display: grid;
      grid-template-columns: 250px 1fr 250px;
      min-height: 100vh;
    }
    .left-nav {
      padding: 20px;
      border-right: 1px solid #eee;
    }
    .right-nav {
      padding: 20px;
      border-left: 1px solid #eee;
    }
    .content {
      padding: 20px;
    }
    .left-nav ul {
      list-style: none;
      padding: 0;
    }
    .left-nav li {
      padding: 10px;
      cursor: pointer;
    }
    .left-nav li.active {
      background: #f0f0f0;
      border-radius: 4px;
    }
  `]
})
export class ApiDetailComponent implements OnInit {
  activeTab = 'overview';
  api: Api | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const apiId = this.route.snapshot.paramMap.get('id');
    if (apiId) {
      this.api = this.apiService.getApiById(apiId);
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
