import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/homeservice';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})

export class ConnexionPage implements OnInit {


  

  constructor(
    private homeService:HomeService,
    protected activatedRoute:ActivatedRoute,
  ) {}

  ngOnInit() {
  }


  // createCompte(form: NgForm) {
  //   if (form.valid) {
  //     const compte: CompteModel = {
  //       mail: this.compte.mail,
  //       nomUtilisateur: this.compte.nomUtilisateur,
  //       motdepasse: this.compte.motdepasse,
  //       client: [{
  //         nom: this.client.nom,
  //         prenom: this.client.prenom,
  //         adresse: this.client.adresse,
  //         dateDeNaissance: this.client.dateDeNaissance,
  //         telephone: this.client.telephone
  //       }]
  //     };
  //     const client: ClientModel = {
  //         nom: this.client.nom,
  //         prenom: this.client.prenom,
  //         adresse: this.client.adresse,
  //         dateDeNaissance: this.client.dateDeNaissance,
  //         telephone: this.client.telephone
  //     };
  //     console.log("Test",client);
  //     this.homeService.createClient(client)
  //     .subscribe(
  //       (response) => {
  //         // Compte créé avec succès
  //         console.log(response);
  //       },
  //       (error) => {
  //         // Erreur lors de la création du compte
  //         console.error(error);
  //       }
  //     );
  //   }
  // }
  
  

}
