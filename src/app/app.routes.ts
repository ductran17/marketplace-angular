import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { ApiCatalogComponent } from './pages/api-catalog/api-catalog.component';
import { SupportComponent } from './pages/support/support.component';
import { ApiDetailComponent } from './components/api-detail/api-detail.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'apis', component: ApiCatalogComponent },
  { path: 'support', component: SupportComponent },
  { path: 'apis/:id', component: ApiDetailComponent },
  { path: 'sign-up', component: SignUpComponent },
];