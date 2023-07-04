import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { error } from "console";
import { CompteModel, ClientModel } from "src/app/models/compte.model";
import { HomeService } from "src/app/service/homeservice";
// import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  errorMessage='';
  compte: CompteModel = {
    mail: '',
    nomUtilisateur: '',
    motDePasse: '',
    clients: [{
      nom: '',
      prenom: '',
      adresse: '',
      ville:'',
      codePostal:'',
      dateDeNaissance: '',
      telephone: ''
    }]
  };
  
  client: ClientModel = {
    nom: '',
    prenom: '',
    adresse: '',
    ville:'',
    codePostal:'',
    dateDeNaissance: '',
    telephone: ''
  };

  
  constructor(
    // private dialogs: Dialogs,
    private homeService:HomeService,
    protected activatedRoute:ActivatedRoute,
  ) {
    
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const compte: CompteModel = {
        mail: this.compte.mail,
        nomUtilisateur: this.compte.nomUtilisateur,
        motDePasse: this.compte.motDePasse,
        clients: [
          {
            nom: this.client.nom,
            prenom: this.client.prenom,
            adresse: this.client.adresse,
            ville:this.client.ville,
            codePostal:this.client.codePostal,
            dateDeNaissance: this.client.dateDeNaissance,
            telephone: this.client.telephone
          }
        ]
      };
      console.log("Test",compte);
      this.homeService.createCompte(compte)
      .subscribe(
        (response) => {
          // Compte créé avec succès
          console.log(response);
          this.errorMessage = response.message;
        },
        (error) => {
          // Erreur lors de la création du compte
          console.error(error);
          // this.dialogs.alert('Mon message', 'Mon titre');
          this.errorMessage= error.error.message;
        }
      );
    }
  }

}
