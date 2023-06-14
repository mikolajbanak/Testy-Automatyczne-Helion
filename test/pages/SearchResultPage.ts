class SearchResultPage {

    get PageTitleAfterSearch(){
        return $("#pageTitle");
    }

    get falseTitleAfterSearch(){
        return $("div.not-found")
    }

    get booksItem(){
        return $$("ul.list > li ");
    }

    get firstResult(){
        return $("ul.list > li:nth-child(1) > a")
    }

    async clickOnFirstResultItem(){
        const item:WebdriverIO.Element = await this.firstResult
        await item.waitForDisplayed();
        await item.click();
    }

    async getPageTitle(): Promise <string>{
        const resultTitle:WebdriverIO.Element = await this.PageTitleAfterSearch;
        await resultTitle.waitForDisplayed();
        return await resultTitle.getText();
    }

    async getFalseTitle(): Promise<string>{
        const resultTitle:WebdriverIO.Element = await this.falseTitleAfterSearch;
        await resultTitle.waitForDisplayed();
        return await resultTitle.getText();
    }

    async getAllBooks():Promise<number>{
        const allBooks:WebdriverIO.ElementArray = await this.booksItem;
        return await allBooks.length;
    }
}

export default new SearchResultPage;