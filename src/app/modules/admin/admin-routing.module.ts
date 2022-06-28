import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClientPreferencesComponent } from './client-preferences/client-preferences.component';
import { ConfigurationDataComponent } from './configuration-data/configuration-data.component';

const routes: Routes = [
  {
    path: '',
    component:AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'client-preferences',
        pathMatch: 'full'
      },
      {
        path: 'client-preferences',
        component: ClientPreferencesComponent,
      },
      {
        path: 'configuration-data',
        component: ConfigurationDataComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
