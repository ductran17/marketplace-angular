import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { ApiCatalogComponent } from './pages/api-catalog/api-catalog.component';
import { SupportComponent } from './pages/support/support.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'api-catalog', component: ApiCatalogComponent },
  { path: 'support', component: SupportComponent } 
];