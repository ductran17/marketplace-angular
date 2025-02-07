import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  menuValue:boolean=false;
  menu_icon:string="bi bi-list";
  openMenu(){
    this.menuValue=!this.menuValue;
    this.menu_icon=this.menuValue? "bi bi-x":"bi bi-list";
  }
  closemenu(){
    this.menuValue=false;
    this.menu_icon="bi bi-list";
  }
}