class ProductPage{

    get productTitle(){
        return $("div.title-group > h1 > span[itemprop='name']")
    }

    get addToCartButton(){
        return $('#addToBasket_tefust')
    }

    get productPrice(){
        return $('ins#cena_d')
    }

    async getProductPrice(): Promise <string>{
        const productPrice:WebdriverIO.Element = await this.productPrice
        await productPrice.waitForDisplayed();
        return await productPrice.getText();
    }


    async productTitleIsVisible(){
        const title:WebdriverIO.Element = await this.productTitle
        await title.waitForDisplayed();
    }

    async cartButtonIsVisible(){
        const cart:WebdriverIO.Element = await this.addToCartButton
        await cart.waitForDisplayed();
    }

    async getProductTitle(): Promise<string>{
        const title:WebdriverIO.Element = await this.productTitle
        return await title.getText();
    }

    async clickAddToCart(){
        const cart:WebdriverIO.Element = await this.addToCartButton
        await cart.click();
    }
}
export default new ProductPage