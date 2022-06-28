import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AddClientDataComponent } from './add-client-data/add-client-data.component';
import { ClientDataListingComponent } from './client-data-listing/client-data-listing.component';

const routes: Routes = [
  {
    path: '',
    component:ClientComponent,
    children: [
      {
        path: '',
        redirectTo: 'listing',
        pathMatch: 'full'
      },
      {
        path: 'listing',
        component: ClientDataListingComponent,
      },
      {
        path: 'add-client-data',
        component: AddClientDataComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }


