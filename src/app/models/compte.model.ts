export interface CompteModel{

    id?: number,
    mail ?: string,
    nomUtilisateur?: string
    motDePasse?: string,
    clients?: ClientModel[],
}

export interface ClientModel{
    id?: number,
    nom ?: string,
    prenom?: string|number,
    adresse?: string|number,
    ville?: string|number,
    codePostal?: string|number,
    dateDeNaissance?: Date|string,
    telephone?: string|number,
    

}
