import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTambahPage } from './home-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTambahPageRoutingModule {}
