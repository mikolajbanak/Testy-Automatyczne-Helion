class GlobalPage {

    get Rodo(){
        return $('#rodo-ok');
    }

    async openPage(pageUrl:string, expectedPageUrl:string){
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl);
    }

    async acceptRodo() {
        const acceptRodo:WebdriverIO.Element = await this.Rodo
        await acceptRodo.click();
    }
}

export default new GlobalPage();