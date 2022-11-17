//Platform
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


//Material
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

//Mserial Datepicker
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatNativeDateModule } from "@angular/material/core";

//Componentes

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/admin/home/home.component';
import { ActivitiesComponent } from './modules/admin/activities/activities.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import {ReportsUsersComponent} from './modules/admin/reports-users/reports-users.component';
import { HelpComponent } from './pages/help/help.component';
import { MonitorRegisterComponent } from './pages/monitor-register/monitor-register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BinnacleComponent } from './modules/admin/binnacle/binnacle.component';
import { BlocksComponent } from './modules/admin/blocks/blocks.component';
import { BlocksDetailsComponent } from './modules/admin/blocks-details/blocks-details.component';
import { UserDetailsComponent } from './modules/admin/user-details/user-details.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    AlertsComponent,     
    NotFoundComponent, 
    ReportsUsersComponent,
    MonitorRegisterComponent,
    NavbarComponent,
    FooterComponent,
    BinnacleComponent,
    BlocksComponent,
    BlocksDetailsComponent,    
    UserDetailsComponent,
    HelpComponent,

  ],
  imports: [
    BrowserModule,

    //angular froms - Reactive forms
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule, 
    MatCardModule,

    //datepicker
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
