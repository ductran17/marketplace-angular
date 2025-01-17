import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ApiCatalogComponent } from './pages/api-catalog/api-catalog.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { SupportComponent } from './pages/support/support.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { routes } from './app.routes'; // Import routes

@NgModule({
  declarations: [
    HomeComponent,
    ApiCatalogComponent,
    SupportComponent
  ],
  imports: [
    HeaderComponent,
    AppComponent,
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    GettingStartedComponent,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }