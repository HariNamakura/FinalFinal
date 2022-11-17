import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from 'src/app/pages/alerts/alerts.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { ReportsUsersComponent } from './reports-users/reports-users.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'alerts',
    component: AlertsComponent,
  },
  {
    path: 'reports-user',
    component: ReportsUsersComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
