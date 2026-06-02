import {Page} from "@playwright/test";

export class sidebar {
    readonly page : Page ;

    constructor(page: Page) {
        this.page = page
    }

    elements={
        Dashboard : ()=> this.page.locator("xpath=//button[text()='Dashboard']"),
        Clients : ()=> this.page.locator("xpath=//button[text()='Clients']"),
        Devis : ()=> this.page.locator("xpath=//button[text()='Devis']"),
        Factures : ()=> this.page.locator("xpath=//button[text()='Factures']"),
        Avoirs : ()=> this.page.locator("xpath=//button[text()='Avoirs']"),
        Relancer : ()=> this.page.locator("xpath=//button[text()='Relancer']"),
        Profil : ()=> this.page.locator("xpath=//button[text()='Profil']"),
        Se_déconnecter : ()=> this.page.locator("xpath=//button[text()='Se déconnecter']"),

    }
    async clickDashboard(){
        await this.elements.Dashboard().click();

    }

    async clickClients(){
        await this.elements.Clients().click();
        
    }

    async clickDevis(){
        await this.elements.Devis().click();
        
    }

    async clickAvoirs(){
        await this.elements.Avoirs().click();
        
    }

    async clickRelancer(){
        await this.elements.Relancer().click();
        
    }

    async clickProfil(){
        await this.elements.Profil().click();
        
    }
    
    async clickSe_déconnecter(){
        await this.elements.Se_déconnecter().click();
        
    }

}
   