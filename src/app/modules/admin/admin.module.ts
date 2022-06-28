import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ClientPreferencesComponent } from './client-preferences/client-preferences.component';
import { ConfigurationDataComponent } from './configuration-data/configuration-data.component';


@NgModule({
  declarations: [
    AdminComponent,
    ClientPreferencesComponent,
    ConfigurationDataComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
