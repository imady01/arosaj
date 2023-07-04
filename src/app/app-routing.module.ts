import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'page-client',
    loadChildren: () => import('./pages/page-client/page-client.module').then( m => m.PageClientPageModule)
  },
  {
    path: 'annonce',
    loadChildren: () => import('./pages/annonce/annonce.module').then( m => m.AnnoncePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
