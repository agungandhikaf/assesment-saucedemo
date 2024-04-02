import Verify from "./page-object/verify-components"

const verify = new Verify()

Cypress.Commands.add('loginUser', (emailUser, passUser) => {
    cy.visit(`${Cypress.config('BASE_URL')}`)
    verify.urlBasePage()
    cy.xpath("//input[@id='user-name']").type(emailUser)
    cy.xpath("//input[@id='password']").type(passUser)
    cy.xpath("//input[@id='login-button']").click().wait(2000)
    verify.urlPage('inventory.html')
})
