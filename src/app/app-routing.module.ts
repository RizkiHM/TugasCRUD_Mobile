import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./home/home.module').then(m=> m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home-tambah',
    loadChildren: () => import('./home-tambah/home-tambah.module').then( m => m.HomeTambahPageModule)
  },
  {
    path: 'home-edit',
    loadChildren: () => import('./home-edit/home-edit.module').then( m => m.HomeEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
