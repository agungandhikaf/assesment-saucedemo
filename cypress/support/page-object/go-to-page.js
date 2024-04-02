class Go {
    cartPage(){
        cy.xpath("//a[@class='shopping_cart_link']").click()
    }
}

export default Go