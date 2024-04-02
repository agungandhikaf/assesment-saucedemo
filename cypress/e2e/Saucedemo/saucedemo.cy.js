import Login from "../../support/page-object/login-page";
import Verify from "../../support/page-object/verify-components";
import Logout from "../../support/page-object/logout-page";
import userData from "../../fixtures/credentials.json";
import Add from "../../support/page-object/add-product";
import Go from "../../support/page-object/go-to-page";

const login = new Login()
const logout = new Logout()
const verify = new Verify()
const add = new Add()
const go = new Go()

describe('Login', () => {
    beforeEach(() => {
        login.goToPage()
        verify.urlBasePage()
    });

    userData.forEach(element => {
        it('Login with ' + element.expected, () => {
            // login.inputUsername(element.username)
            // login.inputPassword(element.password)
            login.loginUser(element.username,element.password)
            login.clickLogin()
            if (element.expected == 'locked user'){ // kondisi pengecekan login error
                verify.errorMessage(element.word)
                login.clearUsername()
            } else {
                // verify.successLogin() 
                verify.urlPage('/inventory.html')
                logout.doLogout()
            }
        });
    });
});

describe('Add to Cart', () => {
    before(() => {
        cy.loginUser('standard_user', 'secret_sauce')
    });
    it('Add 2 Product', () => {
        add.productSatu()
        add.productDua()
        go.cartPage()
        verify.urlPage('/cart.html')
        verify.productInCart('Sauce Labs Backpack')
        verify.productInCart('Sauce Labs Bike Light')
    });
});