class CartPage {
    get successMessage(){
        return $("div.successbox > p")
    }

    get productPrice(){
        return $("#cart-edit-summary")
    }

    get removeIcon(){
        return $("td.delete-column.delete-column-book > a > img")
    }

    get selectfirstCheckbox(){
        return $("td.checkbox.checkbox-book > div > label > span")
    }

    get selectAllCheckboxes(){
        return $("th.checkbox > div > label > span")
    }

    get emptyCartMessage(){
        return $("div.infobox")
    }

    get removeSelected(){
        return $("#usun")
    }

    async getSuccessMessage(){
        const message:WebdriverIO.Element = await this.successMessage
        await message.waitForDisplayed()
        return await message.getText();
    }

    async getProductPrice(){
        const price:WebdriverIO.Element = await this.productPrice
        return await price.getText();
    }

    async clickOnFirstCheckbox(){
        const checkbox:WebdriverIO.Element = await this.selectfirstCheckbox
        await checkbox.click();
    }

    async clickOnAllCheckboxes(){
        const checkboxes:WebdriverIO.Element = await this.selectAllCheckboxes
        await checkboxes.click();
    }

    async clickRemoveSelected(){
        const remove:WebdriverIO.Element = await this.removeSelected
        await remove.click();
    }

    async getEmptyCartMessage(){
        const message:WebdriverIO.Element = await this.emptyCartMessage
        return await message.getText();
    }

    async clickOnRemoveIcon(){
        const removeIcon:WebdriverIO.Element = await this.removeIcon
        await removeIcon.click();
    }

}

export default new CartPage