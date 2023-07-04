import { Injectable, NgModule } from "@angular/core";
import { apiurl } from "src/config/apiurl.config";
import {HttpClient,HttpClientModule} from "@angular/common/http"
import { environment } from "src/environments/environment";
import { CompteModel,ClientModel } from "../models/compte.model";

@Injectable({
    providedIn:'root'
})

@NgModule({
    imports: [HttpClientModule],
  })

export class HomeService {

    SAlert : any;
    constructor(private http : HttpClient){

    }

    getAllClient(){
        return this.http.get<any>(environment.urlAdressApiArosaje + apiurl.getAllClients);
    }

    createCompte(compte : CompteModel){
        return this.http.post<any>(environment.urlAdressApiArosaje + apiurl.createCompte, compte);
    }

    createClient(compte : ClientModel){
        return this.http.post<any>(environment.urlAdressApiArosaje + apiurl.createClient, compte);
    }

    getAllAnnonce(){
        return this.http.get<any>(environment.urlAdressApiArosaje + apiurl.getAllAnnonces);
    }

    getAnnonceByVille(ville:string){
        return this.http.get<any>(environment.urlAdressApiArosaje + apiurl.getAnnonceByVille+ville);
    }

    
}
