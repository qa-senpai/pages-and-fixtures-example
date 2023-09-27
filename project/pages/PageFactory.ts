import { Page } from "@playwright/test";
import { ForumPage, HomePage, LoginPage, ShoppingCartPage } from "./FakePages";

export class PageFactory{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    getLoginPage(){
        return new LoginPage(this.page);
    }

    async getShoppingCartPage(){
        const condition = await this.page.locator('some locator').isVisible();

        if(condition){
        return new ShoppingCartPage(this.page);
    }

        return new ForumPage(this.page);
    }

    getHomePage(){
        return new HomePage(this.page);
    }
}