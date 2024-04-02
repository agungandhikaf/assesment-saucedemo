import Verify from "./verify-components"

const verify = new Verify()

class Login{
    goToPage(){
        cy.visit(`${Cypress.config('BASE_URL')}`)
    }
    inputUsername(user){
        cy.xpath("//input[@id='user-name']").type(user)
        return this
    }
    clearUsername(){
        cy.xpath("//input[@id='user-name']").clear()
    }
    inputPassword(pass){
        cy.xpath("//input[@id='password']").type(pass)
        return this
    }
    clickLogin(){
        cy.xpath("//input[@id='login-button']").click().wait(2000)
    }
    loginUser(user,pass){
        cy.xpath("//input[@id='user-name']").type(user)
        cy.xpath("//input[@id='password']").type(pass)
        return this
    }
}

export default Login