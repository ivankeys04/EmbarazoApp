import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ActionSheetController, IonSegment } from '@ionic/angular';
import { DataService } from '../servicios/data.service';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from "@angular/router";
import {IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: Observable<any>;
  switch: string;
  sharingVar: any;
  toastCtrl: any;
  text: 'Hola estoy embarazada';
  url: 'google.com';

  @ViewChild('slides', { read: true, static: false }) ionSlides: IonSlides;

  constructor(public authservice : AuthService, 
    public actionSheetController: ActionSheetController,
    private dataService: DataService,
    private socialSharing: SocialSharing,public router:Router ) {}
    

    ngOnInit(){
     this.switch = "tu_bebe";
     this.data = this.dataService.getDatos();
    }
    Onlogout(){
      this.authservice.logout();
    }
    
      slidePrev() {
        this.ionSlides.slidePrev();
      }
      slideNext() {
        this.ionSlides.slideNext();
      }

    shareTwitter(){

      this.socialSharing.shareViaTwitter(this.text).then(()=>{

      }).catch(()=>{

      })
  }
    
  shareFacebook(){
    this.socialSharing.shareViaFacebook("Estoy embarazada ",null,this.url).then(()=>{

    }).catch(()=>{

    })
  }
  shareWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.text,null,this.url).then(()=>{

    }).catch(()=>{

    })
  }
  

  segmentChanged(event){
      const valorSegmento = event.detail.value;
      console.log(valorSegmento);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Mi Embarazo',
          role: 'destructive',
          icon: 'woman',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
        {
          text: 'Hospitales Cercanos',
          role: 'destructive',
          icon: 'medical',
          handler: () => {
            this.router.navigate(['/map']);
          },
        },
        {
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
          handler: () => {
            this.Onlogout()
          },
        }
    ]
    });
    await actionSheet.present();
  }
   // componentes:Componente[] = [];
 
}
