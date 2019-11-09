import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { firebaseConfig } from "../environments/environment";
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate : [AuthGuard]},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule',canActivate :[NologinGuard] },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
     AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
