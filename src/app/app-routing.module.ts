import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApiCatalogComponent } from './pages/api-catalog/api-catalog.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { SupportComponent } from './pages/support/support.component';
import { ApiDetailComponent } from './components/api-detail/api-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-catalog', component: ApiCatalogComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'support', component: SupportComponent },
  { path: 'api/:id', component: ApiDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }