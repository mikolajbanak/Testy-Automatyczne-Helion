import { emptyCartMessage, searchPhrase} from "../../config/data"
import { helionHomeUrl, redirectAfterCartAdd} from "../../config/pagesUrl"
import CartPage from "../../pages/CartPage"
import GlobalPage from "../../pages/GlobalPage"
import ProductPage from "../../pages/ProductPage"
import SearchResultPage from "../../pages/SearchResultPage"
import SeachbarPage from "../../pages/components/SeachbarPage"

describe("E2E Products", ()=>{
    let productTitle: string = "";
    let price:string =""
    before(()=> {
        browser.url(helionHomeUrl)
        GlobalPage.acceptRodo();
    })

    it("Should type SearchValue and click search icon", async () =>{
        await SeachbarPage.typeSearchPhrase(searchPhrase);
        await SeachbarPage.clickOnLoupeIcon();
    })

    it("Should click on first result", async ()=>{
        await SearchResultPage.clickOnFirstResultItem();
        await ProductPage.productTitleIsVisible();
        await ProductPage.cartButtonIsVisible();
        productTitle = await ProductPage.getProductTitle();
        price = await ProductPage.getProductPrice();

    })
    it("Should click on add to cart button", async ()=>{
        await ProductPage.clickAddToCart();
        await expect(browser).toHaveUrlContaining(redirectAfterCartAdd)
        await expect(await CartPage.getSuccessMessage()).toContain(productTitle)
        await expect(await CartPage.getProductPrice()).toContain(price)
    })

    it("Should remove added book", async ()=>{
        await CartPage.clickOnAllCheckboxes();
        await CartPage.clickRemoveSelected();
        await browser.acceptAlert();
        await expect (await CartPage.getEmptyCartMessage()).toEqual(emptyCartMessage)
    })
})