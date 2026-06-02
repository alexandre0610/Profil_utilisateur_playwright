import { test, expect } from '@playwright/test';
import { pageHome } from "../pages/pageHome.page.ts";
import { pageLogin } from "../pages/pageLogin.page.ts";
import { sidebar } from "../pages/sidebar.page.ts";
import { pageProfil } from "../pages/pageProfil.page.ts";
let ph: pageHome
let pl: pageLogin
let sb: sidebar
let prof: pageProfil

test.beforeEach('setup', async({page})=>{
  ph = new pageHome(page);
  pl = new pageLogin(page);
  sb = new sidebar(page);
  prof = new pageProfil(page);
  await page.goto("https://thrundrz.fr/gestion",{
    waitUntil: "domcontentloaded", // ✅
    timeout: 60000                // ✅
    
  });
  //await page.goto("https://thrundrz.fr/gestion");
  // await ph.Se_connecter();
});

test('connexion with credentials', async({page})=>{

  // await page.goto("https://thrundrz.fr/gestion");
  await ph.clickSeconnecter();
  await expect(page).toHaveURL("https://thrundrz.fr/gestion/login")
  await pl.connexion("testeur@gmail.com", "testeur2024@")
  // Un message doit apparaître :👉 "Connexion réussie ✅"
  //Accès au profil
  // Cliquer sur le bouton "Profil" dans la sidebar
  await sb.clickProfil()
  // Vérifier que l’URL est :👉 https://thrundrz.fr/gestion/EspaceClient/profil
  await expect(page).toHaveURL("https://thrundrz.fr/gestion/EspaceClient/profil")
  //Type d’entreprise : SASU
  await prof.choisirFormeJuridique("SARL")
  //  Nom commercial
  await prof.saisieNom_com("alex")
  // Adresse
  await prof.saisieAdresse1("58 rue des noie")
  // Code postal
  await prof.saisiCodePostale("75015")
  // Ville
  await prof.saisieVille("barcelone")
  // Capital
  await prof.saisieCapital("madrid")
  // Sélectionner obligatoirement les taux de TVA :
  await prof.checkTva()
  // 5.5%
  await prof.checkbtn_55()
  // 20%
  await prof.checkbtn_20()
  // Cliquer sur " Sauvegarder"
  await prof.clickSauvegarder

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




// Un message doit s’afficher :👉 "Profil mis à jour avec succès"