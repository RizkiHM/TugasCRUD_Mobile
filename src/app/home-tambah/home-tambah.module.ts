import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTambahPageRoutingModule } from './home-tambah-routing.module';

import { HomeTambahPage } from './home-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTambahPageRoutingModule
  ],
  declarations: [HomeTambahPage]
})
export class HomeTambahPageModule {}
