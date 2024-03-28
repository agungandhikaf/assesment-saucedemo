class Verify{
    titlePage(text){
        cy.xpath("//div[@class='login_logo']").should('have.text', text)
    }
    urlPage(){
        cy.url().should('eq', Cypress.env('BASE_URL'))
    }
    // failedAlert(message){
    //     cy.get('[data-layer="Content"]').should('have.text', message)
    // }
    // snackbarAlert(message){
    //     cy.wait(700)
    //     cy.get('.ant-notification-notice-description').should('have.text', message)
    //     cy.get('[class="ant-notification-notice-close-x"]').click()
    // }
    // clickSubmit(text){
    //     cy.wait(300)
    //     cy.get('[type="submit"]').should('have.text', text).click()
    // }
}
export default Verify