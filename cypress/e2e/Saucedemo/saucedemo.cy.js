import Login from "../../support/page-object/login-page";
import Verify from "../../support/page-object/verify-components";
import Logout from "../../support/page-object/logout-page";
import userData from "../../fixtures/credentials.json";

// const userData = require('../../fixtures/credentials')
const login = new Login()
const logout = new Logout()
const verify = new Verify()

describe('', () => {
    beforeEach(() => {
        login.goToPage()
        verify.urlPage()
    });

    userData.forEach(element => {
        it('Login with ' + element.expected, () => {
            login.inputUsername(element.username)
            login.inputPassword(element.password)
            login.clickLogin()
            if (element.expected == 'locked user'){
                verify.errorMessage(element.word)
                login.clearUsername()
            } else {
                verify.successLogin()
                logout.doLogout()
            }
        });
    });
});
/// haloo