import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Api } from '../../models/api.model'
import { CommonModule } from '@angular/common';
import SwaggerUI from 'swagger-ui';
import { marked } from 'marked';
import * as ApiModels from '../../models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface TabItem {
  id: string;
  title: string;
  section?: string;
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
    {
      id: 'overview', 
      title: 'Overview'
    },
    {
      id: 'documentation', 
      title: 'Documentation'
    },
    {
      id: 'sandbox', 
      title: 'Sandbox'
    },
    {
      id: 'term', 
      title: 'Terms and Conditions'
    },
    {
      id: 'contact', 
      title: 'Contact Us'
    }]
  
  tableOfContents: TableOfContent[] = [];
  activeTab: string = 'overview';
  activeSection = '';
  showTableOfContents: boolean = true;
  api: Api | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private sanitizer: DomSanitizer
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

  getTabContent(tabId: string): SafeHtml {
    switch(tabId){
      case 'overview':
        if (this.api?.overview) { // Use ?. to prevent errors
          let htmlContent = '';
          for (const section in this.api.overview) {
            if (this.api.overview.hasOwnProperty(section)) {
              if (section == "definition" || section =="useFor"){
              const sectionData = this.api.overview[section];
              htmlContent += `
                <div class="api-section" id="${section}">
                <h3>${sectionData.title}</h3>
                <p>${sectionData.content}</p>
                </div>
              `;
              }
              else if(section=="useCases" || section=="caseStudies"){
                htmlContent +=`
                <div class="api-section" id="${section}">
                  <h3>${this.api.overview[section]["title"]}</h3>
                  `;
                for (const sectionData of this.api.overview[section]["content"]){
                  htmlContent +=`
                  <div class="banner">
                    <div class="banner-title">
                      <h4>${sectionData["title"]}</h4>
                    </div>
                    <div class="banner-content">
                      <div class="banner-content-text">
                        <p>${sectionData["content"]}</p>
                      </div>
                      <div class="banner-content-img">
                        <img src=${sectionData["image"]}>
                      </div>
                    </div>
                  </div>
                  `;
                }
                htmlContent +=`</div>`;
              }
            }
          }
          return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
        }
        break;
      
      case 'documentation':
        if (this.api?.overview) { // Use ?. to prevent errors
          let htmlContent = '';
          for (const section in this.api.overview) {
            if (this.api.overview.hasOwnProperty(section)) {
              if (section == "definition" || section =="useFor"){
              const sectionData = this.api.overview[section];
              htmlContent += `
                <div class="api-section" id="${section}">
                <h3>${sectionData.title}</h3>
                <p>${sectionData.content}</p>
                </div>
              `;
              }
              else if(section=="useCases" || section=="caseStudies"){
                htmlContent +=`
                <div class="api-section" id="${section}">
                  <h3>${this.api.overview[section]["title"]}</h3>
                  `;
                for (const sectionData of this.api.overview[section]["content"]){
                  htmlContent +=`
                  <div class="banner">
                    <div class="banner-title">
                      <h4>${sectionData["title"]}</h4>
                    </div>
                    <div class="banner-content">
                      <div class="banner-content-text">
                        <p>${sectionData["content"]}</p>
                      </div>
                      <div class="banner-content-img">
                        <img src=${sectionData["image"]}>
                      </div>
                    </div>
                  </div>
                  `;
                }
                htmlContent +=`</div>`;
              }
            }
          }
          return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
        }
        break;

      case 'sandbox':
        if (this.api?.overview) { // Use ?. to prevent errors
          let htmlContent = '';
          for (const section in this.api.overview) {
            if (this.api.overview.hasOwnProperty(section)) {
              if (section == "definition" || section =="useFor"){
              const sectionData = this.api.overview[section];
              htmlContent += `
                <div class="api-section" id="${section}">
                <h3>${sectionData.title}</h3>
                <p>${sectionData.content}</p>
                </div>
              `;
              }
              else if(section=="useCases" || section=="caseStudies"){
                htmlContent +=`
                <div class="api-section" id="${section}">
                  <h3>${this.api.overview[section]["title"]}</h3>
                  `;
                for (const sectionData of this.api.overview[section]["content"]){
                  htmlContent +=`
                  <div class="banner">
                    <div class="banner-title">
                      <h4>${sectionData["title"]}</h4>
                    </div>
                    <div class="banner-content">
                      <div class="banner-content-text">
                        <p>${sectionData["content"]}</p>
                      </div>
                      <div class="banner-content-img">
                        <img src=${sectionData["image"]}>
                      </div>
                    </div>
                  </div>
                  `;
                }
                htmlContent +=`</div>`;
              }
            }
          }
          return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
        }
        break;

      case 'term':
        if (this.api?.term) { // Use ?. to prevent errors
          let htmlContent = '';
          for (const section in this.api.term) {
            if (this.api.term.hasOwnProperty(section)) {
              if (section =="generalTerm"){
              const sectionData = this.api.term[section];
              htmlContent += `
                <div class="api-section" id="${section}">
                  <h3>${sectionData.title}</h3>
                  <p>${sectionData.content}</p>
                </div>
              `;
              }
              else if(section=="terms"){
                htmlContent +=`
                <div class="api-section" id="${section}">
                  `;
                for (const sectionData of this.api.term[section]["content"]){
                  htmlContent +=`
                  <h3>${sectionData.title}</h3>
                  <p>${sectionData.content}</p>
                  `;
                }
                htmlContent +=`</div>`;
              }
            }
          }
          return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
        }
        break;
    }
    return this.sanitizer.bypassSecurityTrustHtml('<p>No content available for this tab.</p>');
  }

  updateTableOfContents() {
    const activeTabContent = this.api?.[this.activeTab as keyof Api];
    if (activeTabContent && typeof activeTabContent === 'object') {
      this.tableOfContents = Object.entries(activeTabContent as Record<string, { title: string }>)
        .map(([key, value]) => ({
          id: key,
          title: value.title,
          target: key
        }));
    } else {
      this.tableOfContents = [];
    }
    this.showTableOfContents = this.tableOfContents.length > 0;
  }

  scrollToSection(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
      this.activeSection = target;
    }
  }
}
