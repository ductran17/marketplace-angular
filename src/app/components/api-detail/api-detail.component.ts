import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Api } from '../../models/api.interface'
import { CommonModule } from '@angular/common';
import SwaggerUI from 'swagger-ui';
import { marked } from 'marked';

interface TabItem {
  id: string;
  title: string;
  content: ContentSection[];
}

interface TableOfContent {
  id: string;
  title: string;
  target: string;
}

interface ContentSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'code' | 'swagger';
}

@Component({
  selector: 'app-api-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.css']
})

export class ApiDetailComponent implements OnInit {
  tabs: TabItem[] = [
    { id: 'overview', 
      title: 'Overview', 
      content: [
        {
          id: 'overview-main',
          title: 'Overview',
          content: 'General overview content goes here',
          type: 'text'
        }
      ]
      },
    { id: 'documentation', 
      title: 'Documentation', 
      content: [
        {
          id: 'introduction',
          title: 'Introduction',
          content: 'The CAMARA Device Location Verification API provides a standardized mechanism for checking mobile equipment geographic location...',
          type: 'text'
        },
        {
          id: 'how-it-works',
          title: 'How it works',
          content: 'Following figure provides a high-level view of the API architecture:',
          type: 'text'
        },
        {
          id: 'api-authentication',
          title: 'API Authentication',
          content: 'The Device Location Verification API will require a 3-Legged OAuth 2.0',
          type: 'text'
        }
      ] },
    { id: 'sandbox', 
      title: 'Sandbox', 
      content: [
        {
          id: 'sandbox-main',
          title: 'Sandbox',
          content: 'Sandbox content goes here',
          type: 'text'
        }
      ] },
    { id: 'terms', 
      title: 'Terms and Conditions', 
      content: [
        {
          id: 'terms-main',
          title: 'Terms and Conditions',
          content: 'Terms and conditions content goes here',
          type: 'text'
        }
      ] },
    { id: 'contact', 
      title: 'Contact Us', 
      content: [
        {
          id: 'contact-main',
          title: 'Contact Us',
          content: 'Contact information goes here',
          type: 'text'
        }
      ] }
  ];
  tableOfContents: TableOfContent[] = [];
  activeTab: string = 'overview';
  activeSection = '';
  showTableOfContents: boolean = true;
  api: Api | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.updateTableOfContents();
    const apiId = this.route.snapshot.paramMap.get('id');
    if (apiId) {
      this.api = this.apiService.getApiById(apiId);
    }
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.activeSection = '';
    // Reset scroll position when changing tabs
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    this.updateTableOfContents();
  }

  getTabContent(tabId: string): ContentSection[] {
    const currentTab = this.tabs.find(tab => tab.id === this.activeTab);
    return currentTab ? currentTab.sections : [];
  }

  updateTableOfContents() {
    // Update table of contents based on active tab
    switch (this.activeTab) {
      case 'overview':
        this.tableOfContents = [
          { id: 'definition', title: 'Definition', target: 'definition' },
          { id: 'use', title: 'What can it be used for ?', target: 'use' },
          { id: 'useCase', title: 'Use Case', target: 'usecase' }
        ];
        break;
      case 'documentation':
        this.tableOfContents = [
          { id: 'intro', title: 'Introduction', target: 'intro' },
          { id: 'auth', title: 'Authentication', target: 'auth' },
          { id: 'endpoints', title: 'Endpoints', target: 'endpoints' }
        ];
        break;
        case 'sandbox':
          this.tableOfContents = [
            { id: 'intro', title: 'Introduction', target: 'intro' },
            { id: 'auth', title: 'Authentication', target: 'auth' },
            { id: 'endpoints', title: 'Endpoints', target: 'endpoints' }
          ];
          break;
      // Add cases for other tabs as needed
      default:
        this.tableOfContents = [];
    }
    this.showTableOfContents = this.tableOfContents.length > 0;
  }

  scrollToSection(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
