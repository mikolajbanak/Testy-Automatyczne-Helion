import GlobalPage from "../../pages/GlobalPage"
import SeachbarPage from "../../pages/components/SeachbarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import {helionHomeUrl, notFoundUrl, searchPageUrl,clearSearchPage} from "../../config/pagesUrl";
import {falseSearchPhrase, falseSearchResultTitle, searchPhrase,searchResultTitle} from "../../config/data"

describe("E2E - Searchbar", async ()=>{
    it("Should open homepage and accept Rodo", async()=>{
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await GlobalPage.acceptRodo();
        await SeachbarPage.searchBarisVisible();
    })

    it("Should click on loupe icon with empty searchbar and check if search page is displayed", async () =>{
        await SeachbarPage.clickOnLoupeIcon();
        await expect (browser).toHaveUrl(clearSearchPage);
    })

    it("Should type SearchValue and verify visible popup", async () =>{
        await SeachbarPage.typeSearchPhrase(searchPhrase);
        await SeachbarPage.suggestPopupIsVisible();
    })

    it("Should click on see all button", async () =>{
        
        await SeachbarPage.clickOnSeeAllButton();
        await expect(browser).toHaveUrlContaining(searchPageUrl)
    })

    it("Should verify title after using search", async () =>{
        const title:string = await SearchResultPage.getPageTitle();
        const numberOfBooks:number = await SearchResultPage.getAllBooks();
        await expect (title).toEqual(searchResultTitle)
        await expect(numberOfBooks).toEqual(20)
    })

    it("Should clear input value", async () =>{
        await SeachbarPage.clearSearchBar();
        await expect(await SeachbarPage.getInputValue()).toContain("")
    })

    it("Should type false search value and check empty search result title", async () =>{
        await SeachbarPage.typeSearchPhrase(falseSearchPhrase);
        await SeachbarPage.clickOnLoupeIcon();
        await expect (await SearchResultPage.getFalseTitle()).toContain(falseSearchResultTitle)
    })

    it("Should clear input and click on search icon", async ()=>{
        await SeachbarPage.clearSearchBar();
        await SeachbarPage.clickOnLoupeIcon();
        await expect (browser).toHaveUrl(notFoundUrl);
        await expect (await SearchResultPage.getFalseTitle()).toContain(clearSearchPage);
        await expect (await SeachbarPage.getInputValue()).toEqual("")
    })
})