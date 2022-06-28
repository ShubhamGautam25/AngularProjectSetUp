import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import(`./modules/admin/admin.module`).then(
      module => module.AdminModule
    )
  },
  {
    path: 'client',
    loadChildren: () => import(`./modules/client/client.module`).then(
      module => module.ClientModule
    )
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
