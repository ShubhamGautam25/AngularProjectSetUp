import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AddClientDataComponent } from './add-client-data/add-client-data.component';
import { ClientDataListingComponent } from './client-data-listing/client-data-listing.component';
import { ClientComponent } from './client.component';


@NgModule({
  declarations: [
    ClientComponent,
    AddClientDataComponent,
    ClientDataListingComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
