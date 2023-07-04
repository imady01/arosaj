import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/homeservice';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.page.html',
  styleUrls: ['./page-client.page.scss'],
})
export class PageClientPage implements OnInit {
  annonces: any[] = [];
  ville: string = '';

  constructor(
    private homeService: HomeService,
    private alertController: AlertController) {}

  ngOnInit() {
    this.homeService.getAllAnnonce().subscribe((data) => {
      console.log(data);
      this.annonces = data; // stocker les annonces dans la variable
    });
  }

  getAnnoncesByVille() {
    if (this.ville) {
      this.homeService.getAnnonceByVille(this.ville).subscribe(
        data => {
          console.log(data);
          this.annonces = data;
          // if (this.annonces.length === 0) {
          //   this.presentAlert('Aucune annonce trouvée pour cette ville.');
          // }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  rechercher() {
    this.getAnnoncesByVille();
  }
  

  // async presentAlert(message: string) {
  //   const alert = await this.alertController.create({
  //     header: 'Erreur',
  //     message: message,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }
}
