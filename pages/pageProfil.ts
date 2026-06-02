import {Page} from "@playwright/test";

export class pageProfil {
    readonly page:Page ;

    constructor(page: Page) {
        this.page = page ;
    }

elements={
    connexion_succ : ()=> this.page.locator("css=.Toastify__toast--success") , // a verifier
    nom_commercial : ()=> this.page.locator('[name="nom commercial"]') ,
    Forme_juridique : ()=> this.page.locator("css=select[name='forme_juridique']") ,
    capital : ()=> this.page.locator('[name="capital"]') ,
    adresse_ligne1 : ()=> this.page.locator('[name="adresse_ligne1"]') ,
    code_postal : ()=> this.page.locator("css=select[name='code_postal']") , // a verifiergr
    ville : ()=> this.page.locator('[name="ville"]') ,
    TVA: ()=> this.page.locator("xpath=//input[@id='TVA incluse (obligatoire pour votre statut)']") ,
    btn_55: ()=> this.page.locator('xpath://label[contains(text(),"5.5%")]//input[@type="checkbox"]') ,
    btn_20: ()=> this.page.locator('xpath://label[contains(text(),"20%")]//input[@type="checkbox"]') ,
    Sauvegarder: ()=> this.page.getByRole("button",{name:"Sauvegarder"}) ,

}
    
}