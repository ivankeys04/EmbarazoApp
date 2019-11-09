import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ActionSheetController, IonSegment } from '@ionic/angular';
import { DataService } from '../servicios/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: Observable<any>;
  switch: string;
  //@ViewChild(IonSegment) segment: IonSegment;

  constructor(public authservice : AuthService, 
    public actionSheetController: ActionSheetController,
    private dataService: DataService ) {}
    

    ngOnInit(){
     this.switch = "tu_bebe";
     this.data = this.dataService.getDatos();
    }
    Onlogout(){
      this.authservice.logout();
  }

  segmentChanged(event){
      const valorSegmento = event.detail.value;
      console.log(valorSegmento);
  }
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
   // componentes:Componente[] = [];
 
}
