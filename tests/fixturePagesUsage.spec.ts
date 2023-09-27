import { test } from '..//project/fixtures/fixturePages';

test('fixture usage test #1', async ({ homePage, checkoutPage }) => {
    homePage.clickCartIcon();
    checkoutPage.editCart();
    //... many more
    })

    test('fixture usage test #2', async ({ homePage, checkoutPage }) => {
        homePage.clickCartIcon();
        checkoutPage.editCart();
        //... many more
    })