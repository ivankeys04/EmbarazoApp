import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authservice : AuthService, public actionSheetController: ActionSheetController   ) {}
  Onlogout(){
      this.authservice.logout();
  }

    slides:{img:string,titulo:string,desc:string}[]=[
      {
        img:'/assets/slides/photos.png',
        titulo:'Semana 1',
        desc:'ljasjdiajsdijaisdjisjaidji'
       },
       {
        img:'/assets/slides/photos.png',
        titulo:'Semana 2',
        desc:'lhola'
       },
       {
        img:'/assets/slides/photos.png',
        titulo:'Semana 3',
        desc:'ljasjdiajsdijaisdjisjaidji'
       }
    ];
    async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.Onlogout()
        },
      }]
    });
    await actionSheet.present();
  }
}
