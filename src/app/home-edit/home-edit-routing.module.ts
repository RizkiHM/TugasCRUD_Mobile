import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEditPage } from './home-edit.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEditPageRoutingModule {}
