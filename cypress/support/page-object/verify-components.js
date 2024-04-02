class Verify{
    urlBasePage(){
        cy.url().should('eq', Cypress.config('BASE_URL'))
    }
    urlPage(link){
        cy.url().should('include', link)
    }
    errorMessage(word){
        cy.get('.error-message-container').should('contain', word)
    }
    successAddProductSatu(){
        cy.xpath("//button[@id='remove-sauce-labs-backpack']").should('contain', 'Remove')
    }
    successAddProductDua(){
        cy.xpath("//button[@id='remove-sauce-labs-bike-light']").should('contain', 'Remove')
    }
    successAddProductTiga(){
        cy.xpath("//button[@id='remove-sauce-labs-bolt-t-shirt']").should('contain', 'Remove')
    }
    successAddProductEmpat(){
        cy.xpath("//button[@id='remove-sauce-labs-fleece-jacket']").should('contain', 'Remove')
    }
    successAddProductLima(){
        cy.xpath("//button[@id='remove-sauce-labs-onesie']").should('contain', 'Remove')
    }
    successAddProductEnam(){
        cy.xpath("//button[@id='remove-test.allthethings()-t-shirt-(red)']").should('contain', 'Remove')
    }
    productInCart(nameProduct){
        cy.xpath("//div[@class='cart_item']").should('contain', nameProduct)
    }
    // titlePage(text){
    //     cy.xpath("//div[@class='login_logo']").should('have.text', text)
    // }
    // successLogin(){
    //     cy.xpath("//a[@class='shopping_cart_link']").should('have.attr', 'data-test', 'shopping-cart-link')
    // }
}
export default Verify