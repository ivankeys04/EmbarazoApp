import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate : [AuthGuard]},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule',canActivate :[NologinGuard] },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule' },
  { path: 'map', loadChildren: './componentes/map/map.module#MapPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
     AngularFireModule.initializeApp({ 
      apiKey: "AIzaSyCC0DWTYuHn5C8LvqUcz5--s5awlbqiZeU",
      authDomain: "embarazoapp.firebaseapp.com",
      databaseURL: "https://embarazoapp.firebaseio.com",
      projectId: "embarazoapp",
      storageBucket: "embarazoapp.appspot.com",
      messagingSenderId: "1019627288232",
      appId: "1:1019627288232:web:2344634442c35d3ac5349d",
      measurementId: "G-JYFKW5QJP2"
  }),AngularFireAuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
