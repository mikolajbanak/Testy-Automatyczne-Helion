class SearchBarPage {
    get searchInput() {
        return $("#inputSearch");
    }

    get loupeIcon() {
        return $(" a > button");
    }

    get suggestList() {
        return $("#szukanie div.suggest-list");
    }

    get seeAllResults(){
        return $("li.wszystkie > p > a")
    }

    async getInputValue(): Promise<string>{
        const input:WebdriverIO.Element = await this.searchInput;
        return await input.getValue();
    }

    async searchBarisVisible () {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }

    async clickOnLoupeIcon (){
        const loupe:WebdriverIO.Element = await this.loupeIcon;
        await loupe.waitForDisplayed();
        await loupe.click();
    }

    async typeSearchPhrase(value:string){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.click();
        await input.setValue(value)
        await browser.pause(300);
        await browser.keys(['Control', 'a']);
    }

    async suggestPopupIsVisible(){
        const popup:WebdriverIO.Element = await this.suggestList;
        await popup.waitForDisplayed();
    }

    async clickOnSeeAllButton(){
        const seeAll:WebdriverIO.Element = await this.seeAllResults;
        await seeAll.waitForDisplayed();
        await seeAll.click();
    }

    async clearSearchBar(){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue(); 
    }
}

export default new SearchBarPage