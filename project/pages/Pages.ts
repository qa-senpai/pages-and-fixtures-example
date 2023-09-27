import { Page } from "@playwright/test";
import { BlogPage, CheckoutPage, ForumPage, HomePage, LoginPage, ProductDetailPage, ProductListingPage, SearchResultsPage, ShoppingCartPage, UserProfilePage } from "./FakePages";

export class Pages {
    loginPage: LoginPage;
    homePage: HomePage;
    userProfilePage: UserProfilePage;
    shoppingCartPage: ShoppingCartPage;
    checkoutPage: CheckoutPage;
    productDetailPage: ProductDetailPage;
    productListingPage: ProductListingPage;
    forumPage: ForumPage;
    searchResultsPage: SearchResultsPage;
    blogPage: BlogPage;

    constructor(page: Page){
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.blogPage = new BlogPage(page);
        this.userProfilePage = new UserProfilePage(page);
        this.shoppingCartPage = new ShoppingCartPage(page);
        this.productDetailPage = new ProductDetailPage(page);
        this.checkoutPage =  new CheckoutPage(page);
        this.productListingPage = new ProductListingPage(page);
        this.forumPage =  new ForumPage(page);
        this.searchResultsPage= new SearchResultsPage(page);
}
}