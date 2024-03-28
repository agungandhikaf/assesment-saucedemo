import Verify from "./verify-components"

const verify = new Verify()

class Login{
    goToPage(){
        cy.visit(`${Cypress.env('BASE_URL')}`)
    }
    inputUsername(user){
        cy.xpath("//input[@id='user-name']").type(user)
        return this
    }
    inputPassword(pass){
        cy.xpath("//input[@id='password']").type(pass)
        return this
    }
    clickLogin(){
        cy.xpath("//input[@id='login-button']").click().wait(2000)
    }
}

export default Login