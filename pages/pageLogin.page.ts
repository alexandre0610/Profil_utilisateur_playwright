import {Page} from "@playwright/test";

export class pageLogin {
    readonly page:Page ;

    constructor(page: Page) {
        this.page = page ;
    }

    elements={
        email:()=> this.page.locator("#email") ,
        password:()=> this.page.locator("#password") , 
       // se_souvenir:()=> this.page.locator('#email') , le xpath, checkbox
        Se_connecter:()=> this.page.getByRole("button",{name:"Se connecter"}) ,
        creer_compte:()=> this.page.getByRole("button",{name:"Créer un compte "})

    }
    async saisieEmail(e: string) {
    //await this.elements.email().waitFor({ state: "visible", timeout: 15000 });
    await this.elements.email().fill(e);
    }


    // async saisieEmail(e:string){

    //     await this.elements.email().fill(e)
    // }

    // async saisiePassword(p:string){
    //     await this.elements.password().fill(p) ;
    // }
    async saisiePassword(p: string) {
    //await this.elements.password().waitFor({ state: "visible", timeout: 15000 });
    await this.elements.password().fill(p);
}

    // async se_souvenir(){
    // await this.elements.se_souvenir().check() ;
    // }

    async Se_connecter(){
        await this.elements.Se_connecter().click() ;
    }

    async creer_compte( ){
        await this.elements.creer_compte().click() ;
    }

    async connexion(e:string , p:string){
        await this.saisieEmail(e);
        await this.saisiePassword(p);
        await this.Se_connecter()
        
    }
    
    
}