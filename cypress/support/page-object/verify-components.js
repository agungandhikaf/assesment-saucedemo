class Verify{
    titlePage(text){
        cy.xpath("//div[@class='login_logo']").should('have.text', text)
    }
    urlPage(){
        cy.url().should('eq', Cypress.env('BASE_URL'))
    }
    errorMessage(word){
        cy.xpath("//h3[@data-test='error']").contain(word)
    }
}
export default Verify