import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-section',
  standalone: true,
  imports: [],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunitySectionComponent {
  title: string = 'We ❤️ developers';
  subtitle: string = 'Join our community';
  description: string = 'Have questions, a big idea, or something to share? Our community is designed to help you thrive.';
  buttonText: string = 'Join us';

  constructor(private router: Router) {}
  
  onJoinClick(): void {
    // Navigate to same page with fragment
    this.router.navigate([], {
      fragment: 'community-section',
      queryParamsHandling: 'preserve'
    });
  }
}
