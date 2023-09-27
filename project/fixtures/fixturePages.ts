import { CheckoutPage, HomePage } from '../pages/FakePages';
import { test as base } from './fixtureBase';

type Pages = {
         homePage: HomePage;
         checkoutPage: CheckoutPage;
        }

export const test = base.extend<Pages>({
        homePage: ({page}, use) => {
            const homePage = new HomePage(page);
            use(homePage);
        },
        checkoutPage: ({page}, use) => {
            const checkoutPage = new CheckoutPage(page);
            use(checkoutPage);
        },
        //add as many page as needed...
})