import { Component, OnInit, AfterViewInit,AfterContentInit, ElementRef, ViewChild, PLATFORM_ID, Inject, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Api, ApiSection } from '../../models/api.model'
import { CommonModule, isPlatformBrowser } from '@angular/common';
import SwaggerUI from 'swagger-ui';
import { marked } from 'marked';
import * as ApiModels from '../../models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

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

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-api-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.css']
})

export class ApiDetailComponent implements OnInit {
  @ViewChild('swaggerContainer') swaggerContainer?:ElementRef;
  
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
  swaggerUI?:any;
  defaultValue=1;
  apiList:string[]=[];
  contactForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.contactForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }),
      email: new FormControl({value: '', disabled: false}),
      company: new FormControl({value:'', disabled: false}),
      message: new FormControl({value:'', disabled: false}),
      api: new FormControl({ value: '', disabled: true })
    });

    this
  }

  ngOnInit() {
    const apiId = this.route.snapshot.paramMap.get('id');
    // this.apiList=this.apiService.getAllApiNames();
    if (apiId) {
      this.api = this.apiService.getApiById(apiId);
      this.setActiveTab('overview');
      this.contactForm.controls['api'].setValue(this.api!.name);
    }
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.activeSection = '';
    // Reset scroll position when changing tabs
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0); // Only run this in the browser
      }
      if (tabId == "sandbox") {
        this.cdr.detectChanges();
        this.loadSwaggerSpec();
      }
    }, 0);
    this.updateTableOfContents();
  }

  private async loadSwaggerSpec(){
    if (this.swaggerContainer && this.api?.sandbox?.sandboxSwagger){
      try{
        const response = await fetch(this.api.sandbox.sandboxSwagger);
        if (!response.ok) {
          throw new Error(`Failed to load Swagger spec: ${response.statusText}`);
        }
        const swaggerSpec = await response.json();
        this.renderSwaggerUI(swaggerSpec);
      }
      catch (error){
        console.error('Error loading Swagger spec:', Error);
        if (this.swaggerContainer){
          this.swaggerContainer.nativeElement.innerHTML=`
            <div class="swagger-error">
              <p>Error loading API specification. Please try again later.</p>
            </div>
          `
        }
      }
    }
  }

  private renderSwaggerUI(spec:any){
    if (this.swaggerUI){
      this.swaggerUI=undefined;
    }
    this.swaggerUI = SwaggerUIBundle({
      domNode: this.swaggerContainer?.nativeElement,
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      spec: spec.default || spec,
      docExpansion: 'none',
      operationsSorter: 'alpha'
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
    }
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
        if (this.api?.sandbox) { // Use ?. to prevent errors
          let htmlContent = '';
          const htmlSection=["introduction","term","functionality","authorization","indentify"]
          for (const section in this.api.sandbox) {
            if (this.api.sandbox.hasOwnProperty(section)) {
              if (htmlSection.includes(section as typeof htmlSection[number])){
                const sectionData = this.api.sandbox[section as keyof typeof this.api.sandbox] as ApiSection;
                htmlContent += `
                  <div class="api-section" id="${section}">
                  <h3>${sectionData.title}</h3>
                  <p>${sectionData.content}</p>
                  </div>
                `;
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

      // case "contact":
      //   if (this.api?.contact){
      //     let htmlContent=`
      //     <div>
      //     <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      //       <div class="form-group">
      //         <label for="name">Name</label>
      //         <input type="text" id="name" formControlName="name">
      //       </div>
      //       <div class="form-group">
      //         <label for="email">Email</label>
      //         <input type="email" id="email" formControlName="email">
      //       </div>
      //       <div class="form-group">
      //         <label for="company">Company</label>
      //         <input type="text" id="company" formControlName="company">
      //       </div>
      //       <div class="form-group">
      //         <label for="useCase">Use Case</label>
      //         <textarea id="useCase" formControlName="useCase"></textarea>
      //       </div>
      //       <div class="form-group">
      //         <label for="fixedField">Predefined API</label>
      //         <input id="fixedField" type="text" formControlName="fixedField" class="form-control" />
      //       </div>    
      //       <button type="submit" [disabled]="!registrationForm.valid">Submit</button>
      //     </form>
      //     </div>`;
      //     return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
      //   }
      //   break;
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
