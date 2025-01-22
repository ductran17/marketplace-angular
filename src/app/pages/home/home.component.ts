import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Api } from '../../models/api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apis: Api[] = [];
  visibleApis: Api[] = [];
  currentIndex = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apis = this.apiService.getFeaturedApis();
    this.updateVisibleApis();
  }

  previousSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleApis();
    }
  }

  nextSlide() {
    if (this.currentIndex < this.apis.length - 4) {
      this.currentIndex++;
      this.updateVisibleApis();
    }
  }

  private updateVisibleApis() {
    this.visibleApis = this.apis.slice(this.currentIndex, this.currentIndex + 4);
  }
}