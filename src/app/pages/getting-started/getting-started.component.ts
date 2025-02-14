import { CommonModule } from '@angular/common';
import { Component, AfterViewInit,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css'],
  imports: [CommonModule]
})
export class GettingStartedComponent implements AfterViewInit {
  showTableOfContents = true;
  tableOfContents: {title: string, target: string}[] = [];
  constructor(private cdr: ChangeDetectorRef){};

  ngAfterViewInit() {
    this.generateTableOfContents();
    this.cdr.detectChanges();
  }

  generateTableOfContents() {
    // Check if the code is running in the browser
    if (typeof document !== 'undefined') {
      const sections = document.querySelectorAll('.content-section h2');
      this.tableOfContents = Array.from(sections).map((section, index) => {
        const heading = section as HTMLElement;
        // Add ID to the section for scrolling
        heading.parentElement?.setAttribute('id', `section-${index}`);
        return {
          title: heading.innerText,
          target: `section-${index}`
        };
      });
    }
  }

  scrollToSection(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}