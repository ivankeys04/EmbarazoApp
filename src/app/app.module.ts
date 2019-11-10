import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import { HttpClientModule } from "@angular/common/http";

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireModule.initializeApp({ 
      apiKey: "AIzaSyCC0DWTYuHn5C8LvqUcz5--s5awlbqiZeU",
      authDomain: "embarazoapp.firebaseapp.com",
      databaseURL: "https://embarazoapp.firebaseio.com",
      projectId: "embarazoapp",
      storageBucket: "embarazoapp.appspot.com",
      messagingSenderId: "1019627288232",
      appId: "1:1019627288232:web:2344634442c35d3ac5349d",
      measurementId: "G-JYFKW5QJP2"
  }),
    AngularFireAuthModule, AngularFirestoreModule,HttpClientModule],
  providers: [
    StatusBar,
    SocialSharing,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
