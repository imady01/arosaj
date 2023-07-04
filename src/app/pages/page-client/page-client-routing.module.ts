import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageClientPage } from './page-client.page';

const routes: Routes = [
  {
    path: '',
    component: PageClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageClientPageRoutingModule {}
