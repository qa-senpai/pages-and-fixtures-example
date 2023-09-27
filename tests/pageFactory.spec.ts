import { test, Page } from '@playwright/test';
import { Pages } from '../project/pages/Pages';
import {  PageFactory } from '../project/pages/PageFactory';
import { HomePage, LoginPage } from '../project/pages/FakePages';

test.describe('some describe block', ()=> {

  const getPages = (page: Page) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        return { homePage, loginPage }
  }

  test('page example', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigateToProfile();
    await loginPage.inputPassword();
    await loginPage.inputUsername();
    })

  test('getPages example', async ({ page }) => {
    const pages = getPages(page);

    await pages.homePage.navigateToProfile();
    await pages.loginPage.inputPassword();
    await pages.loginPage.inputUsername();
  
    })

  test('pages example', async ({ page }) => {
    const pages = new Pages(page);

    await pages.homePage.navigateToProfile();
    await pages.loginPage.inputPassword();
    await pages.loginPage.inputUsername();
    })

  test('page factory example', async ({ page }) => {
    const pageFactory = new PageFactory(page);
    const homePage = pageFactory.getHomePage();
    const loginPage = pageFactory.getLoginPage();

    await homePage.navigateToProfile();
    await loginPage.inputPassword();
    await loginPage.inputUsername();

    await page.goto('/some-address');
    const somePage = await pageFactory.getShoppingCartPage();
  })
})

