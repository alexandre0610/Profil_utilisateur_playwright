import {Page} from "@playwright/test";

export class pageProfil {
    readonly page:Page ;

    constructor(page: Page) {
        this.page = page ;
    }

elements={
    connexion_succ : ()=> this.page.locator("css=.Toastify__toast--success") , // a verifier
    nom_commercial : ()=> this.page.locator('[name="nom_commercial"]') ,
    Forme_juridique : ()=> this.page.locator("css=select[name='forme_juridique']") ,
    capital: ()=> this.page.locator('[name="capital"]') ,
    adresse_ligne1 : ()=> this.page.locator('[name="adresse_ligne1"]') ,
    code_postal : ()=> this.page.locator("[name='code_postal']") , // a verifiergr
    ville : ()=> this.page.locator('[name="ville"]') ,
    Tva: ()=> this.page.locator('xpath://label[contains(text(),"TVA incluse (obligatoire pour votre statut)")]//input[@type="checkbox"]') ,
    btn_55: ()=> this.page.locator('xpath://label[contains(text(),"5.5%")]//input[@type="checkbox"]') ,
    btn_20: ()=> this.page.locator('xpath://label[contains(text(),"20%")]//input[@type="checkbox"]') ,
    Sauvegarder: ()=> this.page.getByRole("button",{name:"Sauvegarder"}) ,

}

async saisieNom_com(n: string){
    await this.elements.nom_commercial().fill(n)
}

async saisieCapital(c: string){
    await this.elements.capital().fill(c)
}

async saisieAdresse1(a1: string){
    await this.elements.adresse_ligne1().fill(a1)
}

async saisieVille(v: string){
    await this.elements.ville().fill(v)
}

async clickSauvegarder(){
    await this.elements.Sauvegarder().click()
}

async checkTva(){
    await this.elements.Tva().check()
}

async checkbtn_55(){
    await this.elements.btn_55().check()
}

async checkbtn_20(){
    await this.elements.btn_20().check()
}

async choisirFormeJuridique(forme: string){
    await this.elements.Forme_juridique().selectOption({ label: forme })
}

async saisiCodePostale(code: string){
    await this.elements.code_postal().clear()  // efface le code precedent
    await this.elements.code_postal().fill(code)
         
}
    
}