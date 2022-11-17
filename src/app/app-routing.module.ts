import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './modules/admin/activities/activities.component';
import { HomeComponent } from './modules/admin/home/home.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReportsUsersComponent } from './modules/admin/reports-users/reports-users.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './registros/components/login/login.component';
import { RegistroComponent } from './registros/components/registro/registro.component';
import { MonitorRegisterComponent } from './pages/monitor-register/monitor-register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [

  { 
    path: '',
    component: LoginComponent, 
    pathMatch: "full" 
  },
  { 
    path: 'register', 
    component: RegistroComponent,  
  },
  {
    path: 'admin',
    component: NavbarComponent,
    loadChildren: () =>
      import('./modules/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
