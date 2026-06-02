import {Page} from "@playwright/test";

export class pageLogin {
    readonly page:Page ;

    constructor(page: Page) {
        this.page = page ;
    }

    elements={
        email :()=> this.page.getByRole("textbox",{name:"Email"}) ,
        Mot_de_passe:()=> this.page.getByRole("textbox",{name:"Mot de passe"}) , 
        se_souvenir :()=> this.page.getByRole("checkbox",{name:"Se souvenir de moi"}) ,
        Se_connecter :()=> this.page.getByRole("button",{name:"Se connecter"}) ,
        creer_compte :()=> this.page.getByRole("link",{name:"Créer un compte"})

    }


    async saisieEmail( e:string){
    await this.elements.email().fill(e) ;
    }

    async saisiePassword( p: string){
    await this.elements.email().fill(p) ;
    }

    async se_souvenir(){
    await this.elements.se_souvenir().check() ;
    }

    async Se_connecter(){
    await this.elements.Se_connecter().click() ;
    }

    async creer_compte( ){
    await this.elements.creer_compte().click() ;
    }

    async connexion( e:string , p: string){
        await this.saisieEmail(e);
        await this.saisiePassword(p);
        await this.se_souvenir
        await this.Se_connecter
        
    }
    
    
}