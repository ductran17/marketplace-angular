import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loginUrl: string = 'https://your-login-url.com';
  onLinkClick(event: Event): void {
    console.log('Navigation link clicked');
    // Perform additional logic if needed
    // Do NOT call event.preventDefault() unless you have custom navigation logic
  }
}