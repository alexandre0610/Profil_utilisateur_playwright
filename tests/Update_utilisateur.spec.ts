import { test, expect } from '@playwright/test';
import {pageHome} from "../pages/pageHome.ts";
import {pageLogin} from "../pages/pageLogin.ts";
import {sidebar} from "../pages/sidebar.ts";
import { pageProfil } from "../pages/pageProfil.ts";
let ph : pageHome
let pl : pageLogin
let sb : sidebar
let pp : pageProfil

test.beforeEach('setup', async({page})=>{
  ph = new pageHome(page) ;
  pl = new pageLogin(page) ;
  sb = new sidebar(page) ;
  pp = new pageProfil(page) ;
  // await page.goto("https://thrundrz.fr/gestion/");
  // await ph.Se_connecter();
  });

test('connexion with credentials', async ({page}) => {
      await page.goto("https://thrundrz.fr/gestion/");
      await ph.Se_connecter();
      await expect(page).toHaveURL("https://thrundrz.fr/gestion/login")
      pl.saisieEmail("testeur@gmail.com")
      // pl.saisiePassword("testeur2024@")
      // pl.Se_connecter()

  // Un message doit apparaître :👉 "Connexion réussie ✅"

  //Accès au profil
  // Cliquer sur le bouton "Profil" dans la sidebar
  //sb.clickProfil

});









//  Accès au site
// Aller sur : https://thrundrz.fr/gestion/
// Cliquer sur le bouton "Se connecter"

// Vérifier que l’URL est bien :👉 https://thrundrz.fr/gestion/login
// Connexion
// Email : testeur@gmail.com
// Mot de passe : testeur2024@
// Cliquer sur "Se connecter"
// Un message doit apparaître :👉 "Connexion réussie ✅"

// Accès au profil
// Cliquer sur le bouton "Profil" dans la sidebar

// Vérifier que l’URL est :👉 https://thrundrz.fr/gestion/EspaceClient/profil


//Type d’entreprise : SASU
//  Nom commercial
// Adresse
// Code postal
// Ville
// Capital
// Sélectionner obligatoirement les taux de TVA :
// 5.5%
// 20%
// Cliquer sur " Sauvegarder"

// Un message doit s’afficher :👉 "Profil mis à jour avec succès"