import { test, expect } from '@playwright/test';



test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
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