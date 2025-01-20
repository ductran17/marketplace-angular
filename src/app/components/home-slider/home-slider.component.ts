import { Component, OnInit, Input, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  @Input() slides: Array<{url: string, title: string}> = [
    {
      url: 'assets/images/VT-Network-API-Banner-Image.png',
      title: 'VT-Network-API-Banner-Image'
    },
    {
      url: 'assets/images/GSMA-Join-Banner-Image.png',
      title: 'GSMA-Join-Banner-Image'
    },
    {
      url: 'assets/images/Develop-Network-Banner-Image.png', // added extension
      title: 'Banner 2'
    },
    {
      url: 'assets/images/Open-Gateway-Banner-Image.png', // added extension
      title: 'Banner 2'
    }
  ];

  currentSlide = 0;
  private intervalId: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? 
      this.slides.length - 1 : 
      this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  handleImageError(event: any) {
    // Set a fallback image or handle the error
    event.target.src = 'assets/images/error-image.png';
  }
}