class Verify{
    titlePage(text){
        cy.xpath("//div[@class='login_logo']").should('have.text', text)
    }
    urlPage(){
        cy.url().should('eq', Cypress.config('BASE_URL'))
    }
    errorMessage(word){
        cy.get('.error-message-container').should('contain', word)
    }
    successLogin(){
        cy.xpath("//a[@class='shopping_cart_link']").should('have.attr', 'data-test', 'shopping-cart-link')
    }
}
export default Verify