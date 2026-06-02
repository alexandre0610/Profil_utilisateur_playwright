import { Page } from "@playwright/test";

export class pageHome {
    readonly page: Page ;
   
    constructor(page: Page) {
        this.page = page ;
        
    }

    elements={
        Se_connecter:()=> this.page.getByRole("link",{name:"Se connecter"}) ,
        creation_du_compte:()=> this.page.getByRole("link",{name:"creation du compte"}) ,
        Influenceur:()=> this.page.getByRole("link",{name:"Influenceur"}) ,
        Tarifs:()=> this.page.getByRole("link",{name:"Tarifs"}) ,
        Services:()=> this.page.getByRole("link",{name:"Services"}) ,
        Accompagner:()=> this.page.getByRole("link",{name:"Accompagner"}) ,
        Acceuil:()=> this.page.getByRole("link",{name:"Acceuil"}) ,
        Contacter_Nous:()=> this.page.getByRole("link",{name:"creation du compte"})

    }

    
    async clickSeconnecter(){
        await this.elements.Se_connecter().click()
    }

    async creation_du_compte(){
        await  this.elements.creation_du_compte().click()
    }

    async Influenceur(){
        await this.elements.Influenceur().click()
    }

    async Tarifs(){
        await this.elements.Tarifs().click()
    }

    async Services(){
        await this.elements.Services().click()
    }

    async Accompagner(){
        await this.elements.Accompagner().click()
    }

    async Acceuil(){
        await this.elements.Acceuil().click()
    }

        async Contacter_Nous(){
    await this.elements.Contacter_Nous().click()
    }
       
    






    

  
}